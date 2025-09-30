# Frontend Setup - Player MVP Leaderboard

This is the **React Native frontend** for the Player MVP Leaderboard.

---

## Prerequisites

- Node.js 
- npm or yarn
- Expo CLI
- Android Studio / Xcode (for emulator) or physical device

---

## Steps to Run Frontend

1. **Clone the repository**:

```bash
git clone https://github.com/kunaltyagi760/Player_Leaderboard_Sportsdunia/
cd <repo-root>/frontend
Install dependencies:

bash
Copy code
npm install
# or
yarn install
Start the Expo server:

bash
Copy code
npx expo start
Run on device or emulator:

For Android:

bash
Copy code
npx expo start --android
For iOS:

bash
Copy code
npx expo start --ios
Configure API URL:

Edit frontend/api/leaderboardApi.ts to point to your backend URL:

ts
Copy code
export const API_BASE_URL = 'http://localhost:3000';
Use the App:

The leaderboard screen shows all players by default.

Toggle "Top Performers" to filter players with score >= 20.

Scroll to see player ranks and points.


