import { Router } from 'express';
import { processPayment } from '../controllers/paymentController';
import { protect } from '../middlewares/authMiddleware';

const router = Router();

router.post('/process', protect, processPayment);

export default router;
