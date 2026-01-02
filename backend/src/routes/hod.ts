import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import { authMiddleware } from '../middleware/auth';

const prisma = new PrismaClient();
const router = Router();

router.get('/dashboard', authMiddleware, async (req, res) => {
  const user = req.user as any;

  if (user.role !== 'HOD') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const hod = await prisma.hod.findUnique({
      where: { id: user.id },
      include: {
        department: {
          include: {
            faculty: true,
            students: true,
          },
        },
      },
    });

    if (!hod) {
      return res.status(404).json({ message: 'HOD not found' });
    }

    res.json(hod.department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
