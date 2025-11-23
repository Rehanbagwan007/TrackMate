
import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller';

const router = Router();

// @route   POST api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', loginUser);

// @route   POST api/auth/register
// @desc    Register user
// @access  Public
router.post('/register', registerUser);

export default router;
