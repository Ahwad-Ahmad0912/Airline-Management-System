import { Request, Response } from 'express';
import pool from '../config/db';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const [users]: any = await pool.query('SELECT id, first_name, last_name, email, role, created_at FROM users ORDER BY created_at DESC');
    res.json({ success: true, count: users.length, data: users });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error fetching users' });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [result]: any = await pool.query('DELETE FROM users WHERE id = ?', [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error deleting user' });
  }
};
