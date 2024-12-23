import express from 'express';
import { selected, byReg } from '../controllers/appointmentController.js';

const router = express.Router()

router.get('/selected', selected)
router.get('/byreg', byReg)

export default router;