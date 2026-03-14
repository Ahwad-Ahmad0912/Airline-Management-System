import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import flightRoutes from './routes/flightRoutes';
import bookingRoutes from './routes/bookingRoutes';
import userRoutes from './routes/userRoutes';
import paymentRoutes from './routes/paymentRoutes';
import { errorHandler } from './middlewares/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Main Routes
app.use('/api/auth', authRoutes);
app.use('/api/flights', flightRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/payments', paymentRoutes);

// Error Handler Middleware
app.use(errorHandler);

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'NovaFly API is running' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
