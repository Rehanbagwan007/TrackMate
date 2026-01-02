import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import { prisma } from './db/client'
import morgan from "morgan"


const app = express()

app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))


// Allow all origins
app.use(cors({ origin: '*' }))

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
import adminRouter from './routes/admin'
import hodRouter from './routes/hod'

app.use('/api/enrollment', enrollmentRouter)
app.use('/api/auth', authRouter)
app.use('/api/admin', adminRouter)
app.use('/api/hod', hodRouter)


// NOTE: Enrollment logic lives in services and routes are thin controllers that enforce role + tenant guards.

const port = process.env.PORT ? Number(process.env.PORT) : 4000
app.listen(port, () => console.log(`TrackMate backend running on http://localhost:${port}`))
