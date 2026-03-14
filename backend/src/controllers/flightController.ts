import { Request, Response } from 'express';
import pool from '../config/db';

export const getAllFlights = async (req: Request, res: Response) => {
  try {
    const [flights]: any = await pool.query(`
      SELECT f.*, 
        a1.name as departure_airport_name, a1.city as departure_city,
        a2.name as arrival_airport_name, a2.city as arrival_city
      FROM flights f
      JOIN airports a1 ON f.departure_airport_id = a1.id
      JOIN airports a2 ON f.arrival_airport_id = a2.id
      ORDER BY f.departure_time DESC
    `);
    res.json({ success: true, count: flights.length, data: flights });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error fetching flights' });
  }
};

export const getFlightById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [flights]: any = await pool.query(`
      SELECT f.*, 
        a1.name as departure_airport_name, a1.city as departure_city,
        a2.name as arrival_airport_name, a2.city as arrival_city
      FROM flights f
      JOIN airports a1 ON f.departure_airport_id = a1.id
      JOIN airports a2 ON f.arrival_airport_id = a2.id
      WHERE f.id = ?
    `, [id]);

    if (flights.length === 0) {
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }

    res.json({ success: true, data: flights[0] });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error fetching flight' });
  }
};

export const createFlight = async (req: Request, res: Response) => {
  try {
    const { flight_number, departure_airport_id, arrival_airport_id, departure_time, arrival_time, base_price, total_seats } = req.body;
    
    // Convert status defaulting to 'Scheduled'
    const status = 'Scheduled';

    const [result]: any = await pool.query(
      'INSERT INTO flights (flight_number, departure_airport_id, arrival_airport_id, departure_time, arrival_time, base_price, total_seats, available_seats, status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [flight_number, departure_airport_id, arrival_airport_id, departure_time, arrival_time, base_price, total_seats, total_seats, status]
    );

    res.status(201).json({
      success: true,
      data: { id: result.insertId, flight_number, status }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error creating flight' });
  }
};

export const updateFlight = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, base_price } = req.body; // Mocked simple update for now

    const [result]: any = await pool.query(
      'UPDATE flights SET status = COALESCE(?, status), base_price = COALESCE(?, base_price) WHERE id = ?',
      [status, base_price, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }

    res.json({ success: true, message: 'Flight updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error updating flight' });
  }
};

export const deleteFlight = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query('DELETE FROM flights WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'Flight not found' });
    }

    res.json({ success: true, message: 'Flight deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error deleting flight' });
  }
};
