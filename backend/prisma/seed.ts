import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const institute = await prisma.institute.create({
    data: {
      name: 'Example Institute',
      code: 'EX-001',
      status: 'ACTIVE',
    },
  })

  const password = 'admin123'
  const passwordHash = await bcrypt.hash(password, 10)

  const admin = await prisma.user.create({
    data: {
      instituteId: institute.id,
      name: 'Institute Admin',
      email: 'admin@example.com',
      passwordHash,
      role: 'INSTITUTE_ADMIN',
    },
  })

  console.log('Seeded institute:', institute.id)
  console.log('Seeded admin id:', admin.id, 'email: admin@example.com password: admin123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
