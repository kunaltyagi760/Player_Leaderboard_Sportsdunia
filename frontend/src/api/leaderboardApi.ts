import { Player } from '../types';
require('dotenv').config();

// Replace with your backend IP + port
const API_BASE_URL = process.env.BACKEND_MACHINE_IP;

export async function fetchLeaderboard(minScore: number): Promise<Player[]> {
  const url = `${API_BASE_URL}/leaderboard?minScore=${minScore}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response not ok');
  }
  return res.json();
}
