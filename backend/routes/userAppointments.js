import express from 'express';
import { selected } from '../controllers/appointmentController.js';

const router = express.Router()

router.get('/selected', selected)


export default router;