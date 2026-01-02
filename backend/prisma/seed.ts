import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const instituteCode = 'EX-001'
  const institute = await prisma.institute.upsert({
    where: { code: instituteCode },
    update: {},
    create: { name: 'Example Institute', code: instituteCode, status: 'ACTIVE' },
  })

  const adminEmail = 'admin@example.com'
  const adminPassword = 'admin123'
  const adminHash = await bcrypt.hash(adminPassword, 10)

  const admin = await prisma.user.upsert({
    where: { instituteId_email: { instituteId: institute.id, email: adminEmail } as any },
    update: {},
    create: { instituteId: institute.id, name: 'Institute Admin', email: adminEmail, passwordHash: adminHash, role: 'INSTITUTE_ADMIN' as any },
  })

  // create a sample department + hod + faculty + student for quick testing
  const dept = await prisma.department.upsert({
    where: { instituteId_code: { instituteId: institute.id, code: 'CSE' } as any },
    update: {},
    create: { instituteId: institute.id, name: 'Computer Science', code: 'CSE', description: 'Computer Science Dept' },
  })

  const hodEmail = 'hod@example.com'
  const hodHash = await bcrypt.hash('hodpass', 10)
  const hod = await prisma.user.upsert({
    where: { instituteId_email: { instituteId: institute.id, email: hodEmail } as any },
    update: {},
    create: { instituteId: institute.id, name: 'HOD User', email: hodEmail, passwordHash: hodHash, role: 'HOD' as any, departmentId: dept.id },
  })
  await prisma.department.update({ where: { id: dept.id }, data: { hodId: hod.id } })

  const facultyEmail = 'faculty@example.com'
  const facultyHash = await bcrypt.hash('facultypass', 10)
  const faculty = await prisma.user.upsert({
    where: { instituteId_email: { instituteId: institute.id, email: facultyEmail } as any },
    update: {},
    create: { instituteId: institute.id, name: 'Faculty User', email: facultyEmail, passwordHash: facultyHash, role: 'FACULTY' as any, departmentId: dept.id },
  })

  const studentEmail = 'student@example.com'
  const studentHash = await bcrypt.hash('studentpass', 10)
  const student = await prisma.user.upsert({
    where: { instituteId_email: { instituteId: institute.id, email: studentEmail } as any },
    update: {},
    create: { instituteId: institute.id, name: 'Student User', email: studentEmail, passwordHash: studentHash, role: 'STUDENT' as any, departmentId: dept.id },
  })

  await prisma.studentAcademicProfile.upsert({
    where: { studentId: student.id },
    update: {},
    create: { instituteId: institute.id, studentId: student.id, year: 1, semester: 1, division: 'A' },
  })

  console.log('Seed complete:')
  console.log(' Institute:', institute.code)
  console.log(' Admin:', adminEmail, 'password:', adminPassword)
  console.log(' HOD:', hodEmail, 'password: hodpass')
  console.log(' Faculty:', facultyEmail, 'password: facultypass')
  console.log(' Student:', studentEmail, 'password: studentpass')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
