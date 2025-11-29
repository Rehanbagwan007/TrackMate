
const express = require('express');
const router = express.Router();
const prisma = require('../prisma');

// @route   POST /api/departments
// @desc    Create a new department
// @access  Public (for now)
router.post('/', async (req, res) => {
  const { name } = req.body;

  try {
    if (!name) {
      return res.status(400).json({ msg: 'Please provide a department name' });
    }

    const department = await prisma.department.create({
      data: {
        name,
      },
    });

    res.status(201).json(department);
  } catch (error) {
    console.error(error.message);
    if (error.code === 'P2002') {
      return res.status(400).json({ msg: 'Department already exists' });
    }
    res.status(500).send('Server Error');
  }
});

// @route   GET /api/departments
// @desc    Get all departments
// @access  Public
router.get('/', async (req, res) => {
  try {
    const departments = await prisma.department.findMany();
    res.json(departments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
