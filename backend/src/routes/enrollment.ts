import express from 'express'
import { authMiddleware, requireRole } from '../middleware/auth'
import { requireTenant } from '../middleware/tenant'
import * as enrollmentService from '../services/enrollmentService'
import{ prisma } from '../db/client'
const router = express.Router()

// Create Department (Institute Admin)
router.post('/departments', authMiddleware, requireRole('INSTITUTE_ADMIN'), requireTenant, async (req, res) => {
  const user = (req as any).user
  const { name, code, description } = req.body
  try {
    const dept = await enrollmentService.createDepartment(user, { name, code, description })
    res.status(201).json(dept)
  } catch (err: any) {
    res.status(400).json({ error: err.message ?? String(err) })
  }
})

// Create HOD (Institute Admin)
router.post('/hods', authMiddleware, requireRole('INSTITUTE_ADMIN'), requireTenant, async (req, res) => {
  const user = (req as any).user
  const { name, email, phone, departmentId, password } = req.body
  try {
    const hod = await enrollmentService.createHod(user, { name, email, phone, departmentId, password })
    res.status(201).json(hod)
  } catch (err: any) {
    res.status(400).json({ error: err.message ?? String(err) })
  }
})

// Create Faculty (HOD)
router.post('/faculty', authMiddleware, requireRole('HOD'), requireTenant, async (req, res) => {
  const user = (req as any).user
  const { name, email, phone, subjectSpecialization, password } = req.body
  try {
    const faculty = await enrollmentService.createFaculty(user, { name, email, phone, subjectSpecialization, password })
    res.status(201).json(faculty)
  } catch (err: any) {
    res.status(400).json({ error: err.message ?? String(err) })
  }
})

// Enroll Student (Faculty)
router.post('/students', authMiddleware, requireRole('FACULTY'), requireTenant, async (req, res) => {
  const user = (req as any).user
  const { name, rollNumber, email, phone, departmentId, year, semester, division, password, faceData, rfidUid, biometricTemplate } = req.body
  try {
    const student = await enrollmentService.enrollStudent(user, { name, rollNumber, email, phone, departmentId, year, semester, division, password, faceData, rfidUid, biometricTemplate })
    res.status(201).json(student)
  } catch (err: any) {
    res.status(400).json({ error: err.message ?? String(err) })
  }
})

export default router
