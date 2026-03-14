Here is a **high-quality detailed prompt** you can use with an AI coding assistant (Cursor, Copilot, ChatGPT, Claude, etc.) to generate your **NovaFly Airline Management System** using **React + TypeScript + MySQL** with the palette from your image. ✈️

---

## 🎯 Detailed AI Prompt for Building NovaFly Airline Management System

**Prompt:**

> Build a modern **Airline Management System called "NovaFly"** using **React (with TypeScript) for the frontend and MySQL for the database backend**.
> The system should be modular, scalable, and follow modern UI/UX principles suitable for an airline booking and administration platform.

---

# ✈️ Project Name

**NovaFly Airline Management System**

### Tagline / Pick Line

**"NovaFly — Elevate Your Journey Beyond the Horizon."**

Alternative tagline options:

* **"NovaFly — Where Every Flight Begins with Excellence."**
* **"NovaFly — Smart Skies, Seamless Journeys."**
* **"NovaFly — The Future of Air Travel Management."**

---

# 🎨 Color Palette (Use Exactly These)

| Color Name | HEX       | Usage                           |
| ---------- | --------- | ------------------------------- |
| Mint       | `#A8FBD3` | highlights, success states      |
| Teal       | `#4FB7B3` | primary UI elements             |
| Blue       | `#637AB9` | secondary components            |
| Navy       | `#31326F` | headers, sidebar, dark sections |

### UI Design Rules

* Primary Color → **Teal (#4FB7B3)**
* Background → **White / Light Gray**
* Navigation / Sidebar → **Navy (#31326F)**
* Buttons / Highlights → **Mint (#A8FBD3)**
* Cards / Secondary UI → **Blue (#637AB9)**

Use a **modern airline-style interface similar to Emirates or Qatar Airways dashboards.**

---

# 🧱 Tech Stack

### Frontend

* React
* TypeScript
* TailwindCSS (recommended)
* React Router
* Axios
* React Query or TanStack Query

### Backend

* Node.js
* Express.js
* TypeScript

### Database

* MySQL

### Optional

* JWT Authentication
* Role-Based Access Control
* REST API

---

# 👥 User Roles

1️⃣ **Admin**

* Manage flights
* Manage users
* Manage airports
* View analytics
* Manage bookings

2️⃣ **Staff**

* Check passenger lists
* Update flight status
* Handle boarding

3️⃣ **Customer**

* Register/login
* Search flights
* Book flights
* Manage bookings
* Download tickets

---

# 🧩 Core Features

## 1️⃣ Authentication System

* Login
* Register
* JWT authentication
* Role-based dashboards

---

# 2️⃣ Flight Management

Admin can:

* Create flights
* Update flights
* Delete flights
* Assign aircraft
* Set departure/arrival times
* Manage flight status

Example fields:

```
Flight Number
Departure Airport
Arrival Airport
Departure Time
Arrival Time
Aircraft
Seats Available
Price
Status
```

---

# 3️⃣ Flight Search System

Users can search flights by:

* Origin
* Destination
* Date
* Passengers

Results show:

* Flight Number
* Airline
* Duration
* Price
* Seats

---

# 4️⃣ Booking System

Users can:

* Select flight
* Enter passenger info
* Choose seat
* Confirm booking

Booking includes:

```
Booking ID
Passenger Name
Flight ID
Seat Number
Booking Status
Payment Status
```

---

# 5️⃣ Payment System

Basic payment simulation:

* Credit card
* Online payment status

---

# 6️⃣ Ticket Generation

Generate ticket with:

```
Passenger Name
Flight
Seat
Gate
Boarding Time
QR Code
```

---

# 7️⃣ Dashboard Analytics

Admin dashboard includes:

* Total Flights
* Total Bookings
* Revenue
* Active Flights
* Upcoming Flights

Charts:

* Monthly revenue
* Flight occupancy
* Popular routes

---

# 📊 Database Schema (MySQL)

### Users

```
id
name
email
password
role
created_at
```

### Flights

```
id
flight_number
departure_airport
arrival_airport
departure_time
arrival_time
price
status
aircraft
```

### Airports

```
id
name
city
country
code
```

### Bookings

```
id
user_id
flight_id
seat_number
status
payment_status
created_at
```

### Payments

```
id
booking_id
amount
payment_method
payment_status
created_at
```

---

# 📁 Recommended Folder Structure

```
NovaFly
│
├── frontend
│   ├── components
│   ├── pages
│   ├── hooks
│   ├── services
│   ├── types
│   ├── layouts
│   └── styles
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   ├── config
│   └── utils
│
└── database
    └── schema.sql
```

---

# 🧑‍💻 UI Pages

### Public Pages

* Home
* Search Flights
* Flight Details
* Login
* Register

---

### Customer Pages

* Dashboard
* My Bookings
* Profile
* Ticket Download

---

### Admin Pages

* Dashboard
* Manage Flights
* Manage Airports
* Manage Bookings
* Manage Users
* Analytics

---

# ✈️ UI Style Guide

### Navbar

Color → `#31326F`

Logo:

```
NovaFly ✈️
```

---

### Buttons

Primary

```
background: #4FB7B3
text: white
```

Secondary

```
background: #637AB9
text: white
```

Accent

```
background: #A8FBD3
text: #31326F
```

---

# 🪟 Dashboard Layout

```
Sidebar (Navy)
   |
   |-- Dashboard
   |-- Flights
   |-- Bookings
   |-- Airports
   |-- Users
   |-- Analytics

Topbar
   |
   |-- Search
   |-- Notifications
   |-- Profile
```

---

# 📦 API Endpoints

### Auth

```
POST /api/auth/register
POST /api/auth/login
```

### Flights

```
GET /api/flights
POST /api/flights
PUT /api/flights/:id
DELETE /api/flights/:id
```

### Bookings

```
POST /api/bookings
GET /api/bookings
DELETE /api/bookings/:id
```

### Payments

```
POST /api/payments
```

---

# ⭐ Extra Features (Optional but Recommended)

* Seat selection UI
* Real-time flight status
* Email ticket confirmation
* QR boarding pass
* Dark mode
* Admin analytics charts

---

# 🎯 Final Goal

Build a **complete production-ready Airline Management System** with:

* clean architecture
* scalable backend
* modern airline UI
* responsive design
* role-based dashboards


