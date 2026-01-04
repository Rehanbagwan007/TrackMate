import { Router, Request } from 'express';
import { authMiddleware } from '../middleware/auth';
import { prisma } from '../db/client';

const router = Router();

interface AuthRequest extends Request {
  user?: any;
}

router.get('/dashboard', authMiddleware, async (req: AuthRequest, res) => {
  const user = req.user;

  if (user.role !== 'HOD') {
    return res.status(403).json({ message: 'Forbidden' });
  }

  try {
    const department = await prisma.department.findUnique({
      where: { hodId: user.id },
      include: {
        hod: true,
        members: true,
        students: true,
        _count: true,
      },
    });

    if (!department) {
      return res.status(404).json({ message: 'Department not found for this HOD' });
    }

    // You can filter for faculty from the members list on the frontend or here
    // const faculty = department.members.filter(m => m.role === 'FACULTY');

    res.json(department);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
