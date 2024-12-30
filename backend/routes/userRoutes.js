import express from 'express';
import {registerUser, loginUser, getUser, userSettings} from '../controllers/userController.js'


const router = express.Router();
router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/getUser', getUser);
router.get('/userSettings', userSettings);

export default router;