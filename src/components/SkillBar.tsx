import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface SkillBarProps {
  name: string;
  levelLabel: string;
  percentage: number;
}

export function SkillBar({ name, levelLabel, percentage }: SkillBarProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.skillName}>{name}</Text>
        <Text style={styles.skillLevel}>{levelLabel}</Text>
      </View>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${percentage}%` }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  skillName: {
    color: '#F3F4F6',
    fontSize: 15,
    fontWeight: '600',
  },
  skillLevel: {
    color: '#38BDF8',
    fontSize: 13,
    fontWeight: '500',
  },
  track: {
    height: 8,
    backgroundColor: '#1E293B',
    borderRadius: 4,
    overflow: 'hidden',
  },
  fill: {
    height: '100%',
    backgroundColor: '#38BDF8',
    borderRadius: 4,
  },
});