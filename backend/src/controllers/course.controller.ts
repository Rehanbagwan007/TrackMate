
import { Request, Response } from 'express';
import prisma from '../lib/prisma';

// @desc    Get all courses
// @route   GET /api/courses
// @access  Public
export const getCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma?.course.findMany();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    Create a course
// @route   POST /api/courses
// @access  Private (Institute Admin)
export const createCourse = async (req: Request, res: Response) => {
  const { name, departmentId, facultyId } = req.body;

  try {
    const course = await prisma.course.create({
      data: {
        name,
        departmentId,
        facultyId,
      },
    });
    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    Get my courses
// @route   GET /api/courses/mycourses
// @access  Private (HOD or Faculty)
export const getMyCourses = async (req: Request, res: Response) => {
  try {
    const courses = await prisma.course.findMany({
      where: {
        OR: [
          { department: { hodId: req.user?.id } },
          { facultyId: req.user?.id },
        ],
      },
    });
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
