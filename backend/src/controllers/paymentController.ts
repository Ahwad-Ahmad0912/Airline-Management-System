import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/authMiddleware';
import pool from '../config/db';

export const processPayment = async (req: AuthRequest, res: Response) => {
  try {
    const { booking_id, amount, payment_method } = req.body;
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    // Simulate payment processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success (90% chance)
    const isSuccess = Math.random() < 0.9;
    
    if (!isSuccess) {
      return res.status(400).json({ success: false, message: 'Payment declined by bank' });
    }

    const transaction_id = 'TXN-' + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Insert payment record
    const [paymentResult]: any = await pool.query(
      'INSERT INTO payments (booking_id, amount, payment_method, status, transaction_id) VALUES (?, ?, ?, ?, ?)',
      [booking_id, amount, payment_method, 'Completed', transaction_id]
    );

    // Update booking status
    await pool.query(
      'UPDATE bookings SET status = ? WHERE id = ?',
      ['Confirmed', booking_id]
    );

    res.json({
      success: true,
      data: {
        payment_id: paymentResult.insertId,
        transaction_id,
        status: 'Completed'
      }
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error processing payment' });
  }
};
