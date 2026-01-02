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

  // CORRECTED: The unique constraint is on the combination of email and instituteId.
  // The correct Prisma syntax for this is `email_instituteId`.
  const admin = await prisma.user.upsert({
    where: { email_instituteId: { email: adminEmail, instituteId: institute.id } },
    update: {},
    create: { instituteId: institute.id, name: 'Institute Admin', email: adminEmail, passwordHash: adminHash, role: 'INSTITUTE_ADMIN' },
  })

  // create a sample student for quick testing
  const studentEmail = 'student@example.com'
  const studentHash = await bcrypt.hash('studentpass', 10)
  // CORRECTED: Applied the same fix for the student user.
  const student = await prisma.user.upsert({
    where: { email_instituteId: { email: studentEmail, instituteId: institute.id } },
    update: {},
    create: { instituteId: institute.id, name: 'Student User', email: studentEmail, passwordHash: studentHash, role: 'STUDENT', departmentId: undefined },
  })

  await prisma.studentAcademicProfile.upsert({
    where: { studentId: student.id },
    update: {},
    create: { instituteId: institute.id, studentId: student.id, year: 1, semester: 1, division: 'A' },
  })

  console.log('Seed complete:')
  console.log(' Institute:', institute.code)
  console.log(' Admin:', adminEmail, 'password:', adminPassword)
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
