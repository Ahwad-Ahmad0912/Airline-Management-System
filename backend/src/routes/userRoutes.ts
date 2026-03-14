import { Router } from 'express';
import { getAllUsers, deleteUser } from '../controllers/userController';
import { protect, adminOnly } from '../middlewares/authMiddleware';

const router = Router();

// Admin only routes
router.get('/', protect, adminOnly, getAllUsers);
router.delete('/:id', protect, adminOnly, deleteUser);

export default router;
