import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import{ prisma } from '../db/client'

const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret'

// Attach `user` to request after validating token
export async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization
  if (!auth || !auth.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' })
  }
  const token = auth.slice(7)
  let payload: any
  try {
    payload = jwt.verify(token, JWT_SECRET)
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' })
  }

  const userId = payload.sub
  if (!userId) return res.status(401).json({ error: 'Invalid token payload' })

  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) return res.status(401).json({ error: 'User not found' })

  // attach minimal user context to request
  ;(req as any).user = {
    id: user.id,
    instituteId: user.instituteId,
    role: user.role,
    email: user.email,
    name: user.name,
  }

  return next()
}

export function requireRole(...allowedRoles: string[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    const user = (req as any).user
    if (!user) return res.status(401).json({ error: 'Unauthorized' })
    if (!allowedRoles.includes(user.role)) {
      return res.status(403).json({ error: 'Forbidden: insufficient role' })
    }
    return next()
  }
}
