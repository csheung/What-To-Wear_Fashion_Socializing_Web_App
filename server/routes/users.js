import express from 'express';

import { signin, signup } from '../controllers/user.js'

const router = express.Router();

// http://localhost:5000/user
router.post('/signin', signin);
router.post('/signup', signup);

export default router;