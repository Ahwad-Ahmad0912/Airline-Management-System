import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import pool from '../config/db';

const generateToken = (id: number, role: string) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET || 'secret123', {
    expiresIn: '30d',
  });
};

export const registerUser = async (req: Request, res: Response) => {
  const { first_name, last_name, email, password, role } = req.body;

  try {
    const [existingUsers]: any = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (existingUsers.length > 0) {
      return res.status(400).json({ success: false, message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const userRole = role === 'admin' ? 'admin' : 'customer';

    const [result]: any = await pool.query(
      'INSERT INTO users (first_name, last_name, email, password_hash, role) VALUES (?, ?, ?, ?, ?)',
      [first_name, last_name, email, hashedPassword, userRole]
    );

    const token = generateToken(result.insertId, userRole);

    res.status(201).json({
      success: true,
      data: {
        id: result.insertId,
        first_name,
        last_name,
        email,
        role: userRole,
        token
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error during registration' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const [users]: any = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
    if (users.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password_hash);

    if (!isMatch) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user.id, user.role);

    res.json({
      success: true,
      data: {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        role: user.role,
        token
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
};

export const getProfile = async (req: any, res: Response) => {
  try {
    const [users]: any = await pool.query('SELECT id, first_name, last_name, email, role, created_at FROM users WHERE id = ?', [req.user.id]);
    if (users.length === 0) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }
    
    res.json({ success: true, data: users[0] });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
