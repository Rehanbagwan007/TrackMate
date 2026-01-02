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
    const department = await prisma.department.findUnique({
      where: { hodId: user.id },
      include: {
        members: true,
        faculty: true,
      },
    });

    if (!department) {
      return res.status(404).json({ message: 'Department not found for this HOD' });
    }

    res.json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
