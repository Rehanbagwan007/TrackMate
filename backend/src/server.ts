import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { prisma } from './db/client'

const app = express()
app.use(cors())
app.use(express.json())

app.get('/health', async (req, res) => {
  try {
    // quick DB check
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok' })
  } catch (err) {
    res.status(500).json({ status: 'error', error: String(err) })
  }
})

// Mount enrollment routes (secure, role-guarded)
import enrollmentRouter from './routes/enrollment'
import authRouter from './routes/auth'

app.use('/api/enrollment', enrollmentRouter)
app.use('/api/auth', authRouter)

// NOTE: Enrollment logic lives in services and routes are thin controllers that enforce role + tenant guards.

const port = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen(port, () => console.log(`TrackMate backend running on http://localhost:${port}`))
