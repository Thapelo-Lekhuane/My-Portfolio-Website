import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { PROFILE, SKILLS } from '../data/portfolio';

const { width } = Dimensions.get('window');

export default function AboutScreen() {
  const [skillSet, setSkillSet] = useState(0);
  const skillSets = [
    { title: 'Technical Skills', skills: SKILLS.technical },
    { title: 'Soft Skills', skills: SKILLS.soft },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setSkillSet((prev) => (prev + 1) % skillSets.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentSkills = skillSets[skillSet].skills;

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
        <View style={styles.skillsSection}>
          <Text style={styles.skillsTitle}>{skillSets[skillSet].title}</Text>
          {currentSkills.map((skill) => (
            <View key={skill.name} style={styles.skillRow}>
              <Text style={styles.skillName}>{skill.name}</Text>
              <View style={styles.progressBar}>
                <View
                  style={[styles.progressFill, { width: `${skill.level}%` }]}
                />
              </View>
              <Text style={styles.skillLevel}>{skill.level}%</Text>
            </View>
          ))}
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
  skillsSection: {
    marginTop: SPACING.lg,
    paddingTop: SPACING.lg,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
  },
  skillsTitle: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  skillRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  skillName: {
    flex: 1,
    fontSize: FONTS.caption,
    color: COLORS.text,
  },
  progressBar: {
    flex: 2,
    height: 12,
    backgroundColor: '#e9ecef',
    borderRadius: 6,
    overflow: 'hidden',
    marginHorizontal: SPACING.sm,
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.primary,
    borderRadius: 6,
  },
  skillLevel: {
    fontSize: FONTS.small,
    color: COLORS.textSecondary,
    width: 36,
    textAlign: 'right',
  },
});
