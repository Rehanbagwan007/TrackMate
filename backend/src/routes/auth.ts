import express from 'express'
import { prisma } from '../db/client'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const router = express.Router()
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'
const INSTITUTE_CODE = 'EX-001'

// login: { email, password }
router.post('/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) return res.status(400).json({ error: 'email and password required' })

  // 1. Find the institute by its code
  const institute = await prisma.institute.findFirst({ where: { code: INSTITUTE_CODE } })
  if (!institute) return res.status(404).json({ error: 'institute not found' })

  // 2. Find the user by their email and institute
  const user = await prisma.user.findUnique({ where: { instituteId_email: { email, instituteId: institute.id } } })
  if (!user) return res.status(401).json({ error: 'invalid credentials' })

  const match = await bcrypt.compare(password, user.passwordHash)
  if (!match) return res.status(401).json({ error: 'invalid credentials' })

  const token = jwt.sign({ sub: user.id, instituteId: user.instituteId, role: user.role }, JWT_SECRET, { expiresIn: '8h' })

  res.json({ token, user: { id: user.id, name: user.name, email: user.email, role: user.role, instituteId: user.instituteId } })
})

// me
import { authMiddleware } from '../middleware/auth'
router.get('/me', authMiddleware, async (req, res) => {
  const user = (req as any).user
  const dbUser = await prisma.user.findUnique({ where: { id: user.id }, include: { hodDepartment: true } })
  if (!dbUser) return res.status(404).json({ error: 'not found' })
  // shape response for frontend/Zustand
  res.json({ id: dbUser.id, name: dbUser.name, email: dbUser.email, role: dbUser.role, instituteId: dbUser.instituteId, department: (dbUser as any).hodDepartment })
})

export default router
