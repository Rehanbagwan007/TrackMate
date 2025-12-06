
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// @desc    Get all departments
// @route   GET /api/departments
// @access  Public
export const getDepartments = async (req: Request, res: Response) => {
  try {
    const departments = await prisma.department.findMany();
    console.log(departments);
    res.json(departments);
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    Create a department
// @route   POST /api/departments
// @access  Private (Institute Admin)
export const createDepartment = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const department = await prisma.department.create({
      data: {
        name,
      },
    });
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
