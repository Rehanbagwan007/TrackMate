import { Request, Response, NextFunction } from 'express'

// Ensure tenant context exists on request and provide helper to assert institute scoping
export function requireTenant(req: Request, res: Response, next: NextFunction) {
  const user = (req as any).user
  if (!user || !user.instituteId) {
    return res.status(400).json({ error: 'Tenant context missing' })
  }
  return next()
}

export function assertSameInstitute(req: Request, instituteId: string) {
  const user = (req as any).user
  if (!user) throw new Error('Missing user context')
  if (user.instituteId !== instituteId) throw new Error('Cross-institute access denied')
}
