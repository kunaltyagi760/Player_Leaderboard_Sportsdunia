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

## Repository Structure

root
│
├── frontend/ # React Native app
│ ├── components/
│ ├── api/
│ └── screens/
│
├── backend/ # Express.js server
│ ├── data/ # players.json & events.json
│ ├── index.js # server entry point
│ └── .env
│
└── README.md # Main project overview


---

## Getting Started

This project requires setting up both **frontend** and **backend**. Follow the instructions in:

- [Frontend Setup](frontend-README.md)
- [Backend Setup](backend-README.md)

Once both are running, open the app and see the live leaderboard.
