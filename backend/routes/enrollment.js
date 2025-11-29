
const express = require('express');
const router = express.Router();
const prisma = require('../prisma');
const bcrypt = require('bcryptjs');

// @route   POST /api/enrollments
// @desc    Create a new enrollment request
// @access  Public
router.post('/', async (req, res) => {
  const {
    email,
    name,
    phone,
    departmentId,
    roleRequested,
    idProofUrl,
    faceEmbedding,
    biometricData,
    qualifications,
    rollNumber,
    year,
    division,
    password,
  } = req.body;

  try {
    // Basic validation
    if (!email || !name || !password || !roleRequested) {
      return res.status(400).json({ msg: 'Please enter all required fields' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const enrollmentRequest = await prisma.enrollmentRequest.create({
      data: {
        email,
        name,
        phone,
        departmentId,
        roleRequested,
        idProofUrl,
        faceEmbedding,
        biometricData,
        qualifications,
        rollNumber,
        year,
        division,
        password: hashedPassword,
      },
    });

    res.status(201).json(enrollmentRequest);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/enrollments
// @desc    Get all enrollment requests
// @access  Public
router.get('/', async (req, res) => {
  try {
    const requests = await prisma.enrollmentRequest.findMany({
      include: { department: true },
    });
    res.json(requests);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT /api/enrollments/:id
// @desc    Approve or reject an enrollment request
// @access  Private (to be implemented)
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { status, approverId } = req.body; // status can be 'approved' or 'rejected'

  try {
    // TODO: Add authorization logic here to ensure only authorized users can approve/reject

    const request = await prisma.enrollmentRequest.findUnique({ where: { id } });

    if (!request) {
      return res.status(404).json({ msg: 'Enrollment request not found' });
    }

    if (status === 'approved') {
      // Using a transaction to ensure atomicity
      const result = await prisma.$transaction(async (prisma) => {
        const newUser = await prisma.user.create({
          data: {
            email: request.email,
            name: request.name,
            password: request.password, // This is already hashed
            phone: request.phone,
            role: request.roleRequested,
            idProofUrl: request.idProofUrl,
            faceEmbedding: request.faceEmbedding,
            biometricData: request.biometricData,
          },
        });

        if (request.roleRequested === 'HOD') {
          await prisma.hOD.create({
            data: {
              userId: newUser.id,
              departmentId: request.departmentId,
            },
          });
        } else if (request.roleRequested === 'FACULTY') {
          await prisma.faculty.create({
            data: {
              userId: newUser.id,
              departmentId: request.departmentId,
              qualifications: request.qualifications,
            },
          });
        } else if (request.roleRequested === 'STUDENT') {
          await prisma.student.create({
            data: {
              userId: newUser.id,
              rollNumber: request.rollNumber,
              departmentId: request.departmentId,
              year: request.year,
              division: request.division,
            },
          });
        }

        return await prisma.enrollmentRequest.update({
          where: { id },
          data: { status: 'approved', approverId },
        });
      });

      res.json(result);
    } else if (status === 'rejected') {
      const updatedRequest = await prisma.enrollmentRequest.update({
        where: { id },
        data: { status: 'rejected', approverId },
      });
      res.json(updatedRequest);
    } else {
      res.status(400).json({ msg: 'Invalid status' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
