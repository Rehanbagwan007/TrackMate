
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const instituteCode = 'EX-001'
  console.log(`Seeding database for institute: ${instituteCode}`)

  // 1. Create or update the Institute
  const institute = await prisma.institute.upsert({
    where: { code: instituteCode },
    update: {},
    create: { name: 'Example Institute', code: instituteCode, status: 'ACTIVE' },
  })
  console.log(`Upserted Institute: ${institute.name}`)

  // 2. Create or update the Institute Admin user
  const adminEmail = 'admin@example.com'
  const adminPassword = 'admin123'
  const adminHash = await bcrypt.hash(adminPassword, 10)

  const admin = await prisma.user.upsert({
    where: { email_instituteId: { email: adminEmail, instituteId: institute.id } },
    update: {},
    create: {
      instituteId: institute.id,
      name: 'Institute Admin',
      email: adminEmail,
      passwordHash: adminHash,
      role: 'INSTITUTE_ADMIN',
    },
  })
  console.log(`Upserted Admin User: ${admin.email}`)

  console.log('\nSeed complete:')
  console.log('----------------')
  console.log(' Institute:', institute.code)
  console.log(' Admin:    ', adminEmail, '| Password:', adminPassword)
  console.log('----------------')
}

main()
  .catch((e) => {
    console.error('An error occurred during seeding:')
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
