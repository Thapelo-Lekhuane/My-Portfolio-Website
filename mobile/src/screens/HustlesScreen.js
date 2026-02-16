import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { HUSTLES } from '../data/portfolio';

export default function HustlesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>My Hustles</Text>
        <Text style={styles.subtitle}>
          Diverse business ventures and personal interests that showcase my
          entrepreneurial spirit and work ethic.
        </Text>
        {HUSTLES.map((hustle) => (
          <View key={hustle.id} style={styles.hustleCard}>
            <View style={styles.timelineDot} />
            <View style={styles.hustleContent}>
              <Text style={styles.hustleTitle}>{hustle.title}</Text>
              <Text style={styles.hustleCompany}>{hustle.company}</Text>
              <Text style={styles.hustleDescription}>{hustle.description}</Text>
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
    marginBottom: SPACING.sm,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: FONTS.caption,
    color: COLORS.textSecondary,
    textAlign: 'center',
    marginBottom: SPACING.lg,
  },
  hustleCard: {
    flexDirection: 'row',
    marginBottom: SPACING.lg,
    position: 'relative',
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.primary,
    marginTop: 6,
    marginRight: SPACING.md,
    borderWidth: 3,
    borderColor: COLORS.card,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 2,
  },
  hustleContent: {
    flex: 1,
    backgroundColor: COLORS.card,
    padding: SPACING.md,
    borderRadius: 10,
    borderLeftWidth: 3,
    borderLeftColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  hustleTitle: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 4,
  },
  hustleCompany: {
    fontSize: FONTS.small,
    color: COLORS.textSecondary,
    marginBottom: 6,
  },
  hustleDescription: {
    fontSize: FONTS.caption,
    color: COLORS.text,
    lineHeight: 20,
  },
});
