import { prisma } from '../db/client'
import bcrypt from 'bcrypt'
import { storagePathForInstitute } from '../lib/supabaseClient'

type Actor = { id: string; instituteId: string; role: string }

/**
 * Create a department — only INSTITUTE_ADMIN allowed
 */
export async function createDepartment(actor: Actor, data: { name: string; code: string; description?: string }) {
  if (actor.role !== 'INSTITUTE_ADMIN') throw new Error('Forbidden')

  // Ensure scoping by instituteId
  const dept = await prisma.department.upsert({
    where: {
      name_instituteId: {
        name: data.name,
        instituteId: actor.instituteId,
      },
    },
    update: {},
    create: {
      instituteId: actor.instituteId,
      name: data.name,
    },
  })
  return dept
}

/**
 * Admin creates HOD user and links to department. instituteId must match.
 */
export async function createHod(actor: Actor, data: { name: string; email: string; phone?: string; departmentId: string; password: string }) {
  if (actor.role !== 'INSTITUTE_ADMIN') throw new Error('Forbidden')

  // Verify department belongs to same institute
  const dept = await prisma.department.findUnique({ where: { id: data.departmentId } })
  if (!dept || dept.instituteId !== actor.instituteId) throw new Error('Invalid department')

  const passwordHash = await bcrypt.hash(data.password, 10)

  const hod = await prisma.user.create({
    data: {
      instituteId: actor.instituteId,
      name: data.name,
      email: data.email,
      passwordHash,
      role: 'HOD',
      departmentId: dept.id,
    },
  })

  // set department.hodId
  await prisma.department.update({ where: { id: dept.id }, data: { hodId: hod.id } })

  return hod
}

/**
 * HOD creates Faculty under same institute and department
 */
export async function createFaculty(actor: Actor, data: { name: string; email: string; phone?: string; subjectSpecialization?: string; password: string }) {
  if (actor.role !== 'HOD') throw new Error('Forbidden')

  // Ensure actor has a department
  const hodUser = await prisma.user.findUnique({ where: { id: actor.id }, include: { department: true } })
  if (!hodUser?.departmentId) throw new Error('HOD not assigned to a department')

  if (hodUser.instituteId !== actor.instituteId) throw new Error('Cross-institute access denied')

  const passwordHash = await bcrypt.hash(data.password, 10)

  const faculty = await prisma.user.create({
    data: {
      instituteId: actor.instituteId,
      name: data.name,
      email: data.email,
      passwordHash,
      role: 'FACULTY',
      departmentId: hodUser.departmentId,
    },
  })

  if (data.subjectSpecialization) {
    await prisma.facultySubject.create({ data: { subject: data.subjectSpecialization, facultyId: faculty.id, departmentId: hodUser.departmentId } })
  }

  return faculty
}

/**
 * Faculty enrolls Student and creates academic profile. Enforces institute scoping.
 */
export async function enrollStudent(actor: Actor, data: { name: string; rollNumber: string; email: string; phone?: string; departmentId: string; year: number; semester: number; division?: string; password: string; faceData?: string; rfidUid?: string; biometricTemplate?: string }) {
  if (actor.role !== 'FACULTY') throw new Error('Forbidden')

  // Check department exists and is same institute
  const dept = await prisma.department.findUnique({ where: { id: data.departmentId } })
  if (!dept || dept.instituteId !== actor.instituteId) throw new Error('Invalid department')

  const passwordHash = await bcrypt.hash(data.password, 10)

  const student = await prisma.user.create({
    data: {
      instituteId: actor.instituteId,
      name: data.name,
      email: data.email,
      passwordHash,
      role: 'STUDENT',
      faceData: data.faceData ? Buffer.from(data.faceData, 'base64') : null,
      rfidUid: data.rfidUid ?? null,
      biometricTemplate: data.biometricTemplate ? Buffer.from(data.biometricTemplate, 'base64') : null,
    },
  })

  await prisma.studentAcademicProfile.create({
    data: {
      instituteId: actor.instituteId,
      studentId: student.id,
      departmentId: dept.id,
      year: data.year,
      semester: data.semester,
      division: data.division,
      rollNo: data.rollNumber,
    },
  })

  return student
}

/**
 * Example: create storage path for student's uploads
 */
export function studentStoragePath(instituteId: string, studentId: string, filename: string) {
  return storagePathForInstitute(instituteId, `students/${studentId}/${filename}`)
}
