CREATE DATABASE IF NOT EXISTS novafly;
USE novafly;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  role ENUM('admin', 'staff', 'customer') DEFAULT 'customer',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS airports (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  city VARCHAR(100) NOT NULL,
  country VARCHAR(100) NOT NULL,
  code VARCHAR(10) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS flights (
  id INT AUTO_INCREMENT PRIMARY KEY,
  flight_number VARCHAR(50) NOT NULL UNIQUE,
  departure_airport_id INT NOT NULL,
  arrival_airport_id INT NOT NULL,
  departure_time DATETIME NOT NULL,
  arrival_time DATETIME NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  status ENUM('scheduled', 'delayed', 'departed', 'arrived', 'cancelled') DEFAULT 'scheduled',
  aircraft VARCHAR(100),
  seats_available INT NOT NULL,
  FOREIGN KEY (departure_airport_id) REFERENCES airports(id),
  FOREIGN KEY (arrival_airport_id) REFERENCES airports(id)
);

CREATE TABLE IF NOT EXISTS bookings (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  flight_id INT NOT NULL,
  seat_number VARCHAR(10),
  status ENUM('confirmed', 'cancelled', 'pending') DEFAULT 'pending',
  payment_status ENUM('unpaid', 'paid', 'refunded') DEFAULT 'unpaid',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (flight_id) REFERENCES flights(id)
);

CREATE TABLE IF NOT EXISTS payments (
  id INT AUTO_INCREMENT PRIMARY KEY,
  booking_id INT NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  payment_method VARCHAR(50) NOT NULL,
  payment_status ENUM('success', 'failed', 'pending') DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (booking_id) REFERENCES bookings(id) ON DELETE CASCADE
);
