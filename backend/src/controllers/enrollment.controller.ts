
import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export const createEnrollmentRequest = async (req: Request, res: Response) => {
  const { email, name, phone, departmentId, roleRequested, idProofUrl, faceEmbedding, biometricData, qualifications, rollNumber, year, division, password } = req.body;

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const enrollmentRequest = await prisma.enrollmentRequest.create({
      data: {
        email,
        name,
        phone,
        department: departmentId ? { connect: { id: departmentId } } : undefined,
        roleRequested,
        idProofUrl,
        faceEmbedding,
        biometricData,
        qualifications,
        rollNumber,
        year: year ? parseInt(year, 10) : null,
        division,
        password: hashedPassword,
      },
    });
    res.status(201).json(enrollmentRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const getEnrollmentRequests = async (req: AuthRequest, res: Response) => {
  try {
    const requests = await prisma.enrollmentRequest.findMany({
      where: { status: 'pending' },
      include: { department: true },
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong' });
  }
};

export const updateEnrollmentRequest = async (req: AuthRequest, res: Response) => {
  const { status } = req.body;
  const { id } = req.params;
  const approverId = req.user?.id;

  try {
    const request = await prisma.enrollmentRequest.findUnique({ where: { id } });

    if (!request) {
      return res.status(404).json({ message: 'Enrollment request not found' });
    }

    const updatedRequest = await prisma.enrollmentRequest.update({
      where: { id },
      data: { 
        status, 
        approver: approverId ? { connect: { id: approverId } } : undefined
      },
    });

    if (status === 'approved') {
      let userData: any = {
        email: request.email,
        name: request.name,
        password: request.password,
        phone: request.phone,
        role: request.roleRequested,
        idProofUrl: request.idProofUrl,
        faceEmbedding: request.faceEmbedding,
        biometricData: request.biometricData,
      };

      if (request.roleRequested === 'HOD' && request.departmentId) {
        userData.hod = { create: { department: { connect: { id: request.departmentId } } } };
      } else if (request.roleRequested === 'FACULTY' && request.departmentId) {
        userData.faculty = { create: { department: { connect: { id: request.departmentId } }, qualifications: request.qualifications } };
      } else if (request.roleRequested === 'STUDENT' && request.departmentId && request.rollNumber && request.year && request.division) {
        userData.student = { create: { department: { connect: { id: request.departmentId } }, rollNumber: request.rollNumber, year: request.year, division: request.division } };
      } else {
        // Handle cases where necessary info for role is missing
        // Maybe change status to 'requires_info' or just fail
        console.error("Cannot create user, missing information for the role");
      }

      await prisma.user.create({ data: userData });
    }

    res.json(updatedRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong' });
  }
};
