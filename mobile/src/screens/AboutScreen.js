import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { PROFILE, PROFILE_EXPERTISE, TECH_STACK } from '../data/portfolio';

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <View style={styles.profileRow}>
          <Image
            source={require('../../assets/img/testimonial-2.jpg')}
            style={styles.avatar}
          />
          <View style={styles.aboutContent}>
            <Text style={styles.label}>Who I Am</Text>
            <Text style={styles.description}>{PROFILE.about}</Text>
          </View>
        </View>
        <View style={styles.expertiseSection}>
          <Text style={styles.sectionLabel}>Core Expertise</Text>
          <View style={styles.expertiseList}>
            {PROFILE_EXPERTISE.map((item) => (
              <View key={item} style={styles.expertiseItem}>
                <Text style={styles.expertiseBullet}>•</Text>
                <Text style={styles.expertiseText}>{item}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.techSection}>
          <Text style={styles.sectionLabel}>Tech Stack</Text>
          <View style={styles.techGrid}>
            {TECH_STACK.map((tech) => (
              <View key={tech} style={styles.techBadge}>
                <Text style={styles.techText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>
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
  profileRow: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: SPACING.lg,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 3,
    borderColor: COLORS.primary,
    marginBottom: SPACING.md,
  },
  aboutContent: {
    width: '100%',
  },
  label: {
    fontSize: FONTS.subtitle,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.sm,
  },
  description: {
    fontSize: FONTS.body,
    color: COLORS.textSecondary,
    lineHeight: 24,
  },
  expertiseSection: {
    marginTop: SPACING.lg,
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  techSection: {
    marginTop: SPACING.lg,
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  sectionLabel: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  expertiseList: {
    gap: SPACING.sm,
  },
  expertiseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.xs,
  },
  expertiseBullet: {
    color: COLORS.primary,
    fontSize: FONTS.body,
    marginRight: SPACING.sm,
  },
  expertiseText: {
    fontSize: FONTS.caption,
    color: COLORS.textSecondary,
    flex: 1,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: SPACING.sm,
  },
  techBadge: {
    backgroundColor: '#f0f7ff',
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'rgba(0, 123, 255, 0.2)',
  },
  techText: {
    fontSize: FONTS.caption,
    color: COLORS.primary,
    fontWeight: '500',
  },
});
