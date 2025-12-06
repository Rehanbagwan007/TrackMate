
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'your_jwt_secret', {
    expiresIn: '30d',
  });
};

export const registerUser = async (req: Request, res: Response) => {
  const { name, email, password, role, departmentId, year, division, qualifications, phone, idProofUrl, faceEmbedding, biometricData, rollNumber } = req.body;

  try {
    const userExists = await prisma.user.findUnique({ where: { email } });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    let userData: any = {
      name,
      email,
      password: hashedPassword,
      role,
      phone,
      idProofUrl,
      faceEmbedding,
      biometricData,
    };

    if (role === 'HOD') {
      userData.hod = {
        create: {
          department: {
            connect: { id: departmentId },
          },
        },
      };
    } else if (role === 'FACULTY') {
      userData.faculty = {
        create: {
          department: {
            connect: { id: departmentId },
          },
          qualifications,
        },
      };
    } else if (role === 'STUDENT') {
      if (!rollNumber || !year || !division) {
          return res.status(400).json({ message: 'Roll number, year, and division are required for students' });
      }
      userData.student = {
        create: {
          department: {
            connect: { id: departmentId },
          },
          rollNumber,
          year: parseInt(year, 10),
          division,
        },
      };
    }

    const user = await prisma.user.create({
      data: userData,
    });

    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: generateToken(user.id),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        token: generateToken(user.id),
      });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};
