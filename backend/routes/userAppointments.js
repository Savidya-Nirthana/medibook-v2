import express from 'express';
import { selected, byReg, placeAppt } from '../controllers/appointmentController.js';

const router = express.Router()

router.get('/selected', selected)
router.get('/byreg', byReg)
router.post('/placeAppt', placeAppt)

export default router;