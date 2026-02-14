
---

# 🌍 TravelMate – Smart Travel Recommendation System

TravelMate is an intelligent travel planning system that not only recommends destinations based on user preferences but also performs **trip optimization analysis** to identify what is limiting better travel options.

---

## 🚀 Features

### 🎯 Smart Destination Recommendation

* Suggests the best destination based on:

  * Climate preference
  * Budget range
  * Trip duration
  * Preferred activities
* Uses a weighted scoring system (Score out of 100).

### 📊 Trip Optimization Report (Unique Feature)

Unlike traditional travel websites, TravelMate tells users:

* What is limiting their trip
* Which preference is acting as a bottleneck
* How relaxing constraints improves results

Example:

```
💰 Budget Impact: 25%
⏳ Duration Impact: 0%
🌤 Climate Impact: 0%
🎯 Activity Impact: 10%

✨ Your trip quality is mainly limited by Budget.
```

### ⭐ Wanderlist (Wishlist)

* Save recommended destinations
* Remove saved destinations
* Persistent during session

### 🔐 Authentication (Basic)

* Sign In functionality
* Username stored in localStorage
---

# 🏗️ Tech Stack

## Frontend

* React.js
* Axios
* CSS (Glassmorphism UI)
* React Router

## Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose

## Architecture

```
Frontend (React)
        ↓
Express API
        ↓
MongoDB Atlas
        ↓
Scoring + Sensitivity Engine
```

---

# 🧠 Scoring Logic

Each destination is scored out of **100**:

| Criteria       | Weight |
| -------------- | ------ |
| Climate Match  | 25     |
| Budget Match   | 25     |
| Duration Match | 25     |
| Activity Match | 25     |

### Example:

If only climate matches → Score = 25
If climate + budget match → Score = 50
If all match → Score = 100

---

# 📈 Sensitivity Analysis Logic

The system:

1. Calculates base score
2. Relaxes each constraint individually:

   * Budget +2000
   * Duration +1 day
   * Climate relaxed
   * Activity relaxed
3. Recalculates best score
4. Computes % improvement

This identifies the **primary bottleneck**.

---

# 📂 Project Structure

```
TravelMate/
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── styles/
│   │   └── assets/
│   └── package.json
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── models/
│   │   └── Destination.js
│   ├── routes/
│   │   └── recommendRoutes.js
│   ├── controllers/
│   │   └── recommendController.js
│   ├── services/
│   │   └── scoringService.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation & Setup

## 1️⃣ Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/TravelMate.git
cd TravelMate
```

---

## 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_atlas_connection_string
```

Start backend:

```bash
node server.js
```

Expected Output:

```
Server running on port 5000
MongoDB Atlas Connected
```

---

## 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm start
```

Runs at:

```
http://localhost:3000
```

---

# 🌐 API Documentation

## POST `/api/recommend`

### Request Body

```json
{
  "climate": "Warm",
  "budget": 8000,
  "duration": 5,
  "activity": "Beach"
}
```

### Response

```json
{
  "bestDestination": { ... },
  "baseScore": 75,
  "analysis": {
    "budget": 25,
    "duration": 0,
    "climate": 0,
    "activity": 10
  },
  "mainBottleneck": "budget",
  "explanation": "Your trip quality is mainly limited by budget."
}
```

---



---

# 🐳 Future Enhancements

* Dockerization
* CI/CD Pipeline
* JWT Authentication
* User Accounts with Saved Trips
* Machine Learning Based Recommendation
* Dynamic Weather API Integration
* Payment Integration
* Admin Dashboard

---

# 💡 What Makes This Project Unique?

Most travel websites:

* Only show results
* Or say "No Results Found"

TravelMate:

* Identifies bottlenecks
* Explains how to improve trip quality
* Provides decision intelligence


---
