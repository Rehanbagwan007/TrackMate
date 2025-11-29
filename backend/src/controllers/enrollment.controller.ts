
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}


export const getEnrollmentRequests = async (req: AuthRequest, res: Response) => {
  try {
    const enrollments = await prisma.enrollment.findMany({
      where: {
        OR: [
          { course: { department: { hodId: req.user?.id } } },
          { course: { facultyId: req.user?.id } },
        ],
      },
      include: { user: true, course: true },
    });
    res.json(enrollments);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    Create an enrollment request
// @route   POST /api/enrollments
// @access  Private
export const createEnrollmentRequest = async (req: AuthRequest, res: Response) => {
  const { courseId } = req.body;

  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        userId: req.user?.id || '',
        courseId,
      },
    });
    res.status(201).json(enrollment);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    Approve or reject an enrollment request
// @route   PUT /api/enrollments/:id
// @access  Private (HOD or Faculty)
export const updateEnrollmentRequest = async (req: AuthRequest, res: Response) => {
  const { status } = req.body;

  try {
    const enrollment = await prisma.enrollment.update({
      where: { id: req.params.id },
      data: { status },
    });
    res.json(enrollment);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
