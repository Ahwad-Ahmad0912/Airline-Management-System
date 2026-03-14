import { Router } from 'express';
import { createBooking, getMyBookings, getAllBookings } from '../controllers/bookingController';
import { protect, adminOnly } from '../middlewares/authMiddleware';

const router = Router();

// Customer routes
router.post('/', protect, createBooking);
router.get('/my-bookings', protect, getMyBookings);

// Admin routes
router.get('/', protect, adminOnly, getAllBookings);

export default router;
