import express from 'express';
import {registerUser, loginUser} from '../controllers/userController.js'


const router = express.Router();
router.post('/login', loginUser);
router.post('/register', registerUser);

export default router;