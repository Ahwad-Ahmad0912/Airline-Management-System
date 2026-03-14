import { Router } from 'express';
import { getAllFlights, getFlightById, createFlight, updateFlight, deleteFlight } from '../controllers/flightController';
import { protect, adminOnly } from '../middlewares/authMiddleware';

const router = Router();

// Public routes
router.get('/', getAllFlights);
router.get('/:id', getFlightById);

// Admin only routes
router.post('/', protect, adminOnly, createFlight);
router.put('/:id', protect, adminOnly, updateFlight);
router.delete('/:id', protect, adminOnly, deleteFlight);

export default router;
