import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { EXPERIENCE } from '../data/portfolio';

export default function ExperienceScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Professional Experience</Text>
        {EXPERIENCE.map((job) => (
          <View key={job.id} style={styles.experienceItem}>
            <View style={styles.header}>
              <View>
                <Text style={styles.role}>{job.role}</Text>
                <Text style={styles.company}>{job.company}</Text>
              </View>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{job.period}</Text>
              </View>
            </View>
            <View style={styles.points}>
              {job.points.map((point, index) => (
                <Text key={index} style={styles.point}>
                  • {point}
                </Text>
              ))}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  content: {
    padding: SPACING.md,
    paddingBottom: SPACING.xl * 2,
  },
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: SPACING.lg,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  sectionTitle: {
    fontSize: FONTS.title,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: SPACING.lg,
    textAlign: 'center',
  },
  experienceItem: {
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
    paddingLeft: SPACING.md,
    marginBottom: SPACING.lg,
    position: 'relative',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: SPACING.sm,
  },
  role: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.text,
  },
  company: {
    fontSize: FONTS.caption,
    color: COLORS.primary,
    fontWeight: '500',
    marginTop: 2,
  },
  badge: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.sm,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    color: COLORS.white,
    fontSize: FONTS.small,
    fontWeight: '600',
  },
  points: {
    marginTop: SPACING.sm,
    paddingLeft: SPACING.sm,
  },
  point: {
    fontSize: FONTS.caption,
    color: COLORS.textSecondary,
    lineHeight: 22,
    marginBottom: 6,
  },
});
