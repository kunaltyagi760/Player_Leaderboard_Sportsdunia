import React, { useCallback, useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { fetchLeaderboard } from '../api/leaderboardApi';
import PlayerRow from '../components/PlayerRow';
import { Player } from '../types';

const LeaderboardScreen = () => {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [showTopOnly, setShowTopOnly] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const minScore = showTopOnly ? 20 : 0;

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchLeaderboard(minScore);
      setPlayers(data);
    } catch (err) {
      console.error(err);
      setError(
        'Failed to fetch leaderboard. Make sure the backend is running and API URL is correct.'
      );
    } finally {
      setLoading(false);
    }
  }, [minScore]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Player MVP Leaderboard</Text>

      <TouchableOpacity
        style={[styles.toggleBtn, showTopOnly ? styles.toggleOn : styles.toggleOff]}
        onPress={() => setShowTopOnly((v) => !v)}
      >
        <Text style={styles.toggleText}>Toggle Top Performers</Text>
        <Text style={styles.smallText}>{showTopOnly ? 'Showing: >=20' : 'Showing: All'}</Text>
      </TouchableOpacity>

      {loading && <ActivityIndicator size="large" />}

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => <PlayerRow player={item} rank={index + 1} />}
          contentContainerStyle={{ paddingBottom: 40 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: '700', marginBottom: 12, textAlign: 'center' },
  toggleBtn: { padding: 12, borderRadius: 8, marginBottom: 12, alignItems: 'center' },
  toggleOn: { backgroundColor: '#d1ffd6' },
  toggleOff: { backgroundColor: '#e6f0ff' },
  toggleText: { fontWeight: '600' },
  smallText: { fontSize: 12 },
  error: { color: 'red', textAlign: 'center' },
});


export default LeaderboardScreen;