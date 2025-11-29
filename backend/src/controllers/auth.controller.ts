
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

// Generate JWT
const generateToken = (id: string) => {
  // TODO: Move JWT_SECRET to a .env file
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your_jwt_secret', {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role, departmentId, facultyId } = req.body;

  try {
    // Check if user already exists
    const hodExists = await prisma.hOD.findUnique({ where: { email } });
    const facultyExists = await prisma.faculty.findUnique({ where: { email } });
    const studentExists = await prisma.student.findUnique({ where: { email } });
    const adminExists = await prisma.instituteAdmin.findUnique({ where: { email } });

    if (hodExists || facultyExists || studentExists || adminExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user: any;

    switch (role) {
      case 'HOD':
        if (!departmentId) {
          return res.status(400).json({ message: 'Department ID is required for HOD' });
        }
        user = await prisma.hOD.create({
          data: { name, email, password: hashedPassword, departmentId },
        });
        break;
      case 'Faculty':
        if (!departmentId) {
          return res.status(400).json({ message: 'Department ID is required for Faculty' });
        }
        user = await prisma.faculty.create({
          data: { name, email, password: hashedPassword, departmentId },
        });
        break;
      case 'Student':
        if (!departmentId || !facultyId) {
          return res.status(400).json({ message: 'Department ID and Faculty ID are required for Student' });
        }
        user = await prisma.student.create({
          data: { name, email, password: hashedPassword, departmentId, facultyId },
        });
        break;
      case 'InstituteAdmin':
        user = await prisma.instituteAdmin.create({
          data: { email, password: hashedPassword },
        });
        break;
      default:
        return res.status(400).json({ message: 'Invalid role' });
    }


    if (user) {
      res.status(201).json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: role,
        token: generateToken(user.id),
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Something went wrong' });
  }
};

// @desc    Login a user
// @route   POST /api/auth/login
// @access  Public
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    let user: any;
    let role: string | undefined;

    // Check for user by email in all relevant tables
    const hod = await prisma.hOD.findUnique({ where: { email } });
    if (hod) {
      user = hod;
      role = 'HOD';
    }

    if (!user) {
      const faculty = await prisma.faculty.findUnique({ where: { email } });
      if (faculty) {
        user = faculty;
        role = 'Faculty';
      }
    }

    if (!user) {
      const student = await prisma.student.findUnique({ where: { email } });
      if (student) {
        user = student;
        role = 'Student';
      }
    }
    
    if (!user) {
      const admin = await prisma.instituteAdmin.findUnique({ where: { email } });
      if (admin) {
        user = admin;
        role = 'InstituteAdmin';
      }
    }

    if (user && (await bcrypt.compare(password, user.password))) {
      const response: any = {
        _id: user.id,
        email: user.email,
        role: role,
        token: generateToken(user.id),
      }
      if (user.name) {
        response.name = user.name;
      }
      res.json(response);
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
