# Player MVP Leaderboard

This project is a **Player MVP Leaderboard** application that tracks and displays player performance based on various actions in a game (e.g., wickets, runs, sixes, fours). It consists of a **React Native frontend** and an **Express.js backend**.

Players earn points based on their actions, and the leaderboard shows the ranking in real-time. You can toggle between **all players** and **top performers** (players with a minimum score).

---

## Features

- View a dynamic leaderboard of players.
- Filter top performers using a toggle.
- Real-time fetching from backend API.
- Points calculation based on specific game actions:
  - `TAKE_WICKET` → 20 points
  - `50_RUNS_MILESTONE` → 15 points
  - `HIT_SIX` → 2 points
  - `HIT_FOUR` → 1 point

---

## Getting Started

This project requires setting up both **frontend** and **backend**. Follow the steps below to run the application.

---

### Backend Setup
The backend is built with Express.js and serves player data and leaderboard calculations.

### Prerequisites
Node.js (v16 recommended)
npm

Ensure players.json and events.json exist in backend/data/

Optional: .env file to configure PORT

1. **Steps to Run Backend**
Navigate to backend folder
cd Player_Leaderboard_Sportsdunia/backend

2. **Install dependencies**
npm install
Create .env file (optional)
PORT=3000

3. **Start the backend server**
node index.js
You should see:
Backend running on http://localhost:3000

### API Endpoints
Get Players
GET /players
Returns a list of players:
[
  { "id": 1, "name": "Player 1" },
  { "id": 2, "name": "Player 2" }
]

Get Events
GET /events
Returns a list of player events:
[
  { "playerId": 1, "action": "TAKE_WICKET" },
  { "playerId": 2, "action": "HIT_SIX" }
]

Get Leaderboard
GET /leaderboard?minScore=20
Optional minScore filters players with score >= minScore.
Returns a sorted leaderboard:
[
  { "id": 1, "name": "Player 1", "score": 40 },
  { "id": 2, "name": "Player 2", "score": 22 }
]


## Frontend Setup

The frontend is built with **React Native** and **Expo**, and it fetches player and leaderboard data from the backend.

### Prerequisites

- Node.js (>=v16 recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Android Studio / Xcode (for emulators) or a physical device

### Steps to Run Frontend

1. **Clone the repository**
git clone https://github.com/kunaltyagi760/Player_Leaderboard_Sportsdunia.git
cd Player_Leaderboard_Sportsdunia/frontend

2. **Install dependencies**
npm install
# or
yarn install


3. **Start the Expo server**
npx expo start
This opens the Expo Developer Tools in your browser.

4. **Configure Backend API URL**

Open:
frontend/api/leaderboardApi.ts
Update the API URL to point to your backend:
export const API_BASE_URL = 'http://localhost:3000';
Replace localhost:3000 if your backend is running on another machine or port.

5. **Run on device or emulator**

Android
npx expo start --android

iOS
npx expo start --ios


### Using the App
By default, the leaderboard shows all players.
Tap "Toggle Top Performers" to filter players with score >= 20.
Scroll through the list to see player ranks and scores.

Troubleshooting
Cannot fetch leaderboard: Make sure the backend server is running and CORS is enabled.
Expo warnings: Use Node.js v16 or a compatible version.
App not showing changes: Restart Expo server or clear cache:
npx expo start -c

Backend port issues: Check .env or update API_BASE_URL in frontend.

### Notes
Frontend uses React Native with functional components and hooks.
Backend uses Express.js and reads JSON files (players.json & events.json) to calculate scores.
Toggle button dynamically filters high-scoring players.

### The project is designed for real-time leaderboard updates.
