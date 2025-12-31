import { PrismaClient } from '@prisma/client'

// Single Prisma client instance for backend
const prisma = new PrismaClient()

export default prisma
