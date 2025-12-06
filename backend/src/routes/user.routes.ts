
import { Router } from 'express';
import { getUsers, getUserById } from '../controllers/user.controller';
import { protect, authorize } from '../middleware/auth.middleware';

const router = Router();

// @route   GET api/users
// @desc    Get all users
// @access  Private (Admin)
router.route('/').get(protect, authorize('INSTITUTE_ADMIN' as any), getUsers);

// @route   GET api/users/:id
// @desc    Get user by ID
// @access  Private
router.route('/:id').get(protect, getUserById);

export default router;
