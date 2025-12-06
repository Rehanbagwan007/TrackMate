
import { Router } from 'express';
import { getEnrollmentRequests, createEnrollmentRequest, updateEnrollmentRequest } from '../controllers/enrollment.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

// @route   GET api/enrollments
// @desc    Get all enrollment requests
// @access  Private (HOD or Faculty)
router.route('/').get(protect, authorize('HOD' as any, 'FACULTY' as any), getEnrollmentRequests);

// @route   POST api/enrollments
// @desc    Create an enrollment request
// @access  Private
router.route('/').post(protect, createEnrollmentRequest);

// @route   PUT api/enrollments/:id
// @desc    Approve or reject an enrollment request
// @access  Private (HOD or Faculty)
router.route('/:id').put(protect, authorize('HOD' as any, 'FACULTY' as any), updateEnrollmentRequest);

export default router;
