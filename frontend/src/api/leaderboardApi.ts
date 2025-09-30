import { Player } from '../types';

// Replace with your backend IP + port
const API_BASE_URL = "http://192.168.1.8:3000";

export async function fetchLeaderboard(minScore: number): Promise<Player[]> {
  const url = `${API_BASE_URL}/leaderboard?minScore=${minScore}`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error('Network response not ok');
  }
  return res.json();
}
