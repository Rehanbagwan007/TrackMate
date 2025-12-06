
import { Router } from 'express';
import { getDepartments, createDepartment } from '../controllers/department.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

// @route   GET api/departments
// @desc    Get all departments
// @access  Public
router.route('/').get(getDepartments);

// @route   POST api/departments
// @desc    Create a department
// @access  Private (Institute Admin)
router.route('/').post(protect, authorize('INSTITUTE_ADMIN' as any), createDepartment);

export default router;
