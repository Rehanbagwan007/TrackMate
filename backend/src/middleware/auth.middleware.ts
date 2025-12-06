
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient,User } from '@prisma/client';
import { UserArgs } from '@prisma/client/runtime/library';


const prisma = new PrismaClient();

// Extend Express Request interface to include user property
interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
    // Add other fields if needed
  };
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret') as { id: string };

      const user = await prisma?.user?.findUnique({
        where: { id: decoded.id as unknown as string },
        select: { id: true, name: true, email: true, role: true },
      });

      if (!user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      req.user = user ;

      next();
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};

export const authorize = (...roles: User[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role as unknown as User)) {
      return res.status(403).json({ message: `User role ${req.user?.role} is not authorized to access this route` });
    }
    next();
  };
};
