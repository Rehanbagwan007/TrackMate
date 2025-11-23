
import { Router } from 'express';
import { getCourses, createCourse, getMyCourses } from '../controllers/course.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

// @route   GET api/courses
// @desc    Get all courses
// @access  Public
router.route('/').get(getCourses);

// @route   POST api/courses
// @desc    Create a course
// @access  Private (Institute Admin)
router.route('/').post(protect, authorize('INSTITUTE_ADMIN'), createCourse);

// @route   GET api/courses/mycourses
// @desc    Get my courses
// @access  Private (HOD or Faculty)
router.route('/mycourses').get(protect, authorize('HOD', 'FACULTY'), getMyCourses);

export default router;
