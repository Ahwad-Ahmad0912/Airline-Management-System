import { Request, Response } from 'express';
import { AuthRequest } from '../middlewares/authMiddleware';
import pool from '../config/db';

export const createBooking = async (req: AuthRequest, res: Response) => {
  try {
    const { flight_id, total_price, passenger_details, seat_number } = req.body;
    const user_id = req.user?.id;

    if (!user_id) {
      return res.status(401).json({ success: false, message: 'Not authorized' });
    }

    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      // Check seat availability
      const [flights]: any = await connection.query('SELECT available_seats FROM flights WHERE id = ? FOR UPDATE', [flight_id]);
      
      if (flights.length === 0) {
        throw new Error('Flight not found');
      }

      if (flights[0].available_seats <= 0) {
        throw new Error('No seats available');
      }

      // Generate PNR
      const pnr = Math.random().toString(36).substring(2, 8).toUpperCase();

      // Create Booking
      const [bookingResult]: any = await connection.query(
        'INSERT INTO bookings (user_id, flight_id, pnr, status, total_price) VALUES (?, ?, ?, ?, ?)',
        [user_id, flight_id, pnr, 'Confirmed', total_price]
      );

      // Decrease available seats
      await connection.query(
        'UPDATE flights SET available_seats = available_seats - 1 WHERE id = ?',
        [flight_id]
      );

      await connection.commit();

      res.status(201).json({
        success: true,
        data: {
          booking_id: bookingResult.insertId,
          pnr,
          status: 'Confirmed'
        }
      });
    } catch (err: any) {
      await connection.rollback();
      res.status(400).json({ success: false, message: err.message });
    } finally {
      connection.release();
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error creating booking' });
  }
};

export const getMyBookings = async (req: AuthRequest, res: Response) => {
  try {
    const user_id = req.user?.id;
    
    const [bookings]: any = await pool.query(`
      SELECT b.*, f.flight_number, f.departure_time, f.arrival_time,
             a1.code as departure_code, a2.code as arrival_code
      FROM bookings b
      JOIN flights f ON b.flight_id = f.id
      JOIN airports a1 ON f.departure_airport_id = a1.id
      JOIN airports a2 ON f.arrival_airport_id = a2.id
      WHERE b.user_id = ?
      ORDER BY b.created_at DESC
    `, [user_id]);

    res.json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error fetching bookings' });
  }
};

export const getAllBookings = async (req: Request, res: Response) => {
  try {
    const [bookings]: any = await pool.query(`
      SELECT b.*, u.first_name, u.last_name, u.email, f.flight_number
      FROM bookings b
      JOIN users u ON b.user_id = u.id
      JOIN flights f ON b.flight_id = f.id
      ORDER BY b.created_at DESC
    `);
    
    res.json({ success: true, count: bookings.length, data: bookings });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error fetching all bookings' });
  }
};
