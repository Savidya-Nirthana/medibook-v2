import express from 'express';
import {registerUser, loginUser, getUser} from '../controllers/userController.js'


const router = express.Router();
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/getUser', getUser)

export default router;