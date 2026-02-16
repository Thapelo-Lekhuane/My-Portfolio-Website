import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { PROJECTS } from '../data/portfolio';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - SPACING.md * 2;

export default function ProjectsScreen() {
  const openLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <Text style={styles.subtitle}>
          A showcase of my projects in Software Engineering and DevOps.
        </Text>
        {PROJECTS.map((project) => (
          <TouchableOpacity
            key={project.id}
            style={styles.projectCard}
            onPress={() => openLink(project.url)}
            activeOpacity={0.9}
          >
            <Image source={project.image} style={styles.projectImage} />
            <View style={styles.projectInfo}>
              <Text style={styles.projectTitle}>{project.title}</Text>
              <Text style={styles.projectSubtitle}>{project.subtitle}</Text>
              <Text style={styles.projectDescription} numberOfLines={3}>
                {project.description}
              </Text>
              <Text style={styles.viewLink}>Tap to View →</Text>
            </View>
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
  projectCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.card,
    borderRadius: 12,
    marginBottom: SPACING.md,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  projectImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
  projectInfo: {
    flex: 1,
    padding: SPACING.md,
    justifyContent: 'center',
  },
  projectTitle: {
    fontSize: FONTS.body,
    fontWeight: '600',
    color: COLORS.primary,
    marginBottom: 4,
  },
  projectSubtitle: {
    fontSize: FONTS.small,
    color: COLORS.textSecondary,
    marginBottom: 4,
  },
  projectDescription: {
    fontSize: FONTS.small,
    color: COLORS.text,
    lineHeight: 18,
  },
  viewLink: {
    fontSize: FONTS.small,
    color: COLORS.primary,
    fontWeight: '600',
    marginTop: 4,
  },
});
