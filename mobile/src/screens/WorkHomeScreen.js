import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONTS } from '../constants/theme';

export default function WorkHomeScreen({ navigation }) {
  const sections = [
    { key: 'Experience', title: 'Professional Experience', icon: 'briefcase', desc: 'Work history & roles' },
    { key: 'Projects', title: 'Projects', icon: 'folder', desc: 'Portfolio showcase' },
    { key: 'Services', title: 'Services', icon: 'construct', desc: 'What I offer' },
  ];

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Work</Text>
        <Text style={styles.subtitle}>
          Explore my experience, projects, and services.
        </Text>
        {sections.map((section) => (
          <TouchableOpacity
            key={section.key}
            style={styles.menuCard}
            onPress={() => navigation.navigate(section.key)}
            activeOpacity={0.8}
          >
            <View style={styles.menuIconWrap}>
              <Ionicons name={section.icon} size={28} color={COLORS.primary} />
            </View>
            <View style={styles.menuContent}>
              <Text style={styles.menuTitle}>{section.title}</Text>
              <Text style={styles.menuDesc}>{section.desc}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={COLORS.primary} />
          </TouchableOpacity>
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
  menuCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    padding: SPACING.lg,
    borderRadius: 12,
    marginBottom: SPACING.md,
    borderLeftWidth: 4,
    borderLeftColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  menuIconWrap: {
    marginRight: SPACING.md,
  },
  menuContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.text,
  },
  menuDesc: {
    fontSize: FONTS.small,
    color: COLORS.textSecondary,
    marginTop: 2,
  },
  arrow: {
    fontSize: 20,
    color: COLORS.primary,
    fontWeight: '600',
  },
});
