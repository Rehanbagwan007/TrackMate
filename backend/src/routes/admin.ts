import express from 'express'
import { prisma } from '../db/client'

const router = express.Router()

// Get all HODs
router.get('/hods', async (req, res) => {
  const hods = await prisma.user.findMany({
    where: { role: 'HOD' },
    include: { hodOf: true },
  })
  res.json(hods)
})

export default router
