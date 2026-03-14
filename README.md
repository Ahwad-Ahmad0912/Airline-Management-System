# Airline-Management-System


# ✈️ NovaFly Airline Management System

**NovaFly — Elevate Your Journey Beyond the Horizon**

NovaFly is a modern **Airline Management System** designed to manage airline operations such as flights, bookings, passengers, and payments through a clean and responsive web interface. The system is built using **React + TypeScript for the frontend** and **Node.js with MySQL for the backend**, providing a scalable and efficient solution for airline management.

---

# 📌 Project Overview

NovaFly aims to simplify airline operations and passenger booking processes. The system allows administrators to manage flights, airports, and users, while customers can search flights, book tickets, and manage their reservations.

This project was developed as part of a **Web Technologies Semester Project**.

---

# 🚀 Features

### 👤 User Features

* User registration and login
* Search flights by origin, destination, and date
* View available flights
* Book airline tickets
* View booking history
* Download or view ticket information

### 🛫 Flight Management

* Add new flights
* Update flight schedules
* Manage flight status
* Assign aircraft and routes

### 📊 Admin Dashboard

* View system statistics
* Manage users
* Manage flights
* Monitor bookings
* View airline activity

### 💳 Booking & Payment

* Create flight bookings
* Store passenger information
* Manage payment status

---

# 🎨 UI Design

NovaFly uses a **modern aviation-inspired color palette**:

| Color | Hex Code  | Usage                |
| ----- | --------- | -------------------- |
| Mint  | `#A8FBD3` | Highlights           |
| Teal  | `#4FB7B3` | Primary UI           |
| Blue  | `#637AB9` | Secondary elements   |
| Navy  | `#31326F` | Navigation & headers |

The UI is designed to be **clean, minimal, and responsive**.

---

# 🛠️ Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS / CSS
* React Router
* Axios

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MySQL

### Version Control

* Git
* GitHub

---

# 🗄️ Database Structure

Main tables used in the system:

* Users
* Flights
* Airports
* Bookings
* Payments

Example table fields:

**Users**

* id
* name
* email
* password
* role

**Flights**

* id
* flight_number
* departure_airport
* arrival_airport
* departure_time
* arrival_time
* price
* status

**Bookings**

* id
* user_id
* flight_id
* seat_number
* booking_status

---

# 📁 Project Structure

```
NovaFly-Airline-Management-System
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   └── styles
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   └── config
│
└── database
    └── schema.sql
```

---

# ⚙️ Installation

### 1️⃣ Clone the Repository

```
git clone https://github.com/Ahwad-Ahmad0912/Airline-Management-System.git
```

---

### 2️⃣ Navigate to Project

```
cd Airline-Management-System
```

---

### 3️⃣ Install Dependencies

Frontend:

```
npm install
```

Backend:

```
npm install
```

---

### 4️⃣ Configure Database

Create a MySQL database:

```
novafly_db
```

Import the database schema located in:

```
/database/schema.sql
```

---

### 5️⃣ Start Development Server

Frontend:


npm run dev


Backend:

npm start

# 📸 Future Improvements

* Seat selection interface
* Real-time flight tracking
* Email ticket confirmation
* QR boarding passes
* Mobile responsive UI
* Advanced analytics dashboard


# 📄 License

This project is created for **educational and academic purposes**.

# ✈️ NovaFly

**Smart Skies. Seamless Journeys.**
