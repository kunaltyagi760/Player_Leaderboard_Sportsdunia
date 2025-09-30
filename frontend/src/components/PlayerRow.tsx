import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Player } from '../types';

type Props = {
  player: Player;
  rank: number;
};

export default function PlayerRow({ player, rank }: Props) {
  return (
    <View style={styles.row}>
      <Text style={styles.rank}>{rank}</Text>
      <View style={styles.info}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.score}>Score: {player.score}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
    alignItems: 'center',
  },
  rank: { width: 30, fontWeight: '700' },
  info: { marginLeft: 10 },
  name: { fontSize: 16, fontWeight: '600' },
  score: { fontSize: 13, color: '#333' },
});
