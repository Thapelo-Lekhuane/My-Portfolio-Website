import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { SERVICES } from '../data/portfolio';

const SERVICE_ICONS = ['code-slash', 'git-branch', 'cloud', 'construct', 'cube', 'lock-closed'];

export default function ServicesScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Services</Text>
        <Text style={styles.subtitle}>
          Providing top-tier solutions in Software Engineering and DevOps.
        </Text>
        {SERVICES.map((service, index) => (
          <View key={service.id} style={styles.serviceCard}>
            <View style={styles.iconCircle}>
              <Ionicons name={SERVICE_ICONS[index]} size={24} color={COLORS.primary} />
            </View>
            <View style={styles.serviceContent}>
              <Text style={styles.serviceTitle}>{service.title}</Text>
              <Text style={styles.serviceDescription}>{service.description}</Text>
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
  serviceCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: SPACING.lg,
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
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SPACING.md,
  },
  serviceContent: {
    flex: 1,
  },
  serviceTitle: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: 4,
  },
  serviceDescription: {
    fontSize: FONTS.caption,
    color: COLORS.textSecondary,
    lineHeight: 20,
  },
});
