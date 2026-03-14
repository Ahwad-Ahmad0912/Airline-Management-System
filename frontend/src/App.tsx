import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';

import Home from './pages/Home';
import SearchFlights from './pages/SearchFlights';
import FlightDetails from './pages/FlightDetails';
import Login from './pages/Login';
import Register from './pages/Register';

import CustomerDashboard from './pages/customer/Dashboard';
import MyBookings from './pages/customer/MyBookings';
import Profile from './pages/customer/Profile';
import BookingFlow from './pages/customer/BookingFlow';
import TicketDownload from './pages/customer/TicketDownload';

import AdminDashboard from './pages/admin/Dashboard';
import ManageFlights from './pages/admin/ManageFlights';
import ManageAirports from './pages/admin/ManageAirports';
import ManageBookings from './pages/admin/ManageBookings';
import ManageUsers from './pages/admin/ManageUsers';
import Analytics from './pages/admin/Analytics';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchFlights />} />
          <Route path="flight/:id" element={<FlightDetails />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>

        {/* Customer Booking Flow (Full page) */}
        <Route path="/customer/booking" element={
          <div className="min-h-screen bg-gray-50 pt-10"><BookingFlow /></div>
        } />

        {/* Customer Dashboard Routes */}
        <Route path="/customer" element={<DashboardLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<CustomerDashboard />} />
          <Route path="bookings" element={<MyBookings />} />
          <Route path="profile" element={<Profile />} />
          <Route path="ticket" element={<TicketDownload />} />
        </Route>
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin" element={<DashboardLayout />}>
           <Route index element={<Navigate to="dashboard" replace />} />
           <Route path="dashboard" element={<AdminDashboard />} />
           <Route path="flights" element={<ManageFlights />} />
           <Route path="airports" element={<ManageAirports />} />
           <Route path="bookings" element={<ManageBookings />} />
           <Route path="users" element={<ManageUsers />} />
           <Route path="analytics" element={<Analytics />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
