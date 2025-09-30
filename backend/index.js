const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
require('dotenv').config(); 

const app = express();
app.use(express.json());
app.use(cors());

const DATA_DIR = path.join(__dirname, 'data');

// action -> points mapping
const ACTION_POINTS = {
  TAKE_WICKET: 20,
  "50_RUNS_MILESTONE": 15,
  HIT_SIX: 2,
  HIT_FOUR: 1,
};

const readJSON = (filename) => {
  try {
    const raw = fs.readFileSync(path.join(DATA_DIR, filename), 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    console.error('Error reading', filename, err);
    return [];
  }
}

// Return players list
app.get('/players', (req, res) => {
  const players = readJSON('players.json');
  res.json(players);
});

// Return events list
app.get('/events', (req, res) => {
  const events = readJSON('events.json');
  res.json(events);
});

// Compute leaderboard
// Optional query: ?minScore=20 to only return players with score >= minScore
app.get('/leaderboard', (req, res) => {
  const players = readJSON('players.json'); // array of {id, name}
  const events = readJSON('events.json'); // array of {playerId, action}

  // map playerId -> score
  const scores = {};

  for (const ev of events) {
    const pid = ev.playerId;
    const pts = ACTION_POINTS[ev.action] || 0;
    scores[pid] = (scores[pid] || 0) + pts;
  }

  // build result array
  const result = players.map(p => {
    return {
      id: p.id,
      name: p.name,
      score: scores[p.id] || 0
    };
  });

  // sort desc
  result.sort((a, b) => b.score - a.score);

  const minScore = parseInt(req.query.minScore || '0', 10);
  const filtered = result.filter(r => r.score >= minScore);

  res.json(filtered);
});

// Start server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Backend running on http://localhost:${port}`);
});
