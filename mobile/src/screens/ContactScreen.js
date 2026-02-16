import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Linking,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS, SPACING, FONTS } from '../constants/theme';
import { CONTACT } from '../data/portfolio';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const openLink = (url) => {
    Linking.openURL(url);
  };

  const openEmail = () => {
    Linking.openURL(`mailto:${CONTACT.email}`);
  };

  const openPhone = () => {
    Linking.openURL(`tel:${CONTACT.phone}`);
  };

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      Alert.alert('Missing Fields', 'Please fill in all fields.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('subject', subject);
      formData.append('message', message);
      const response = await fetch(CONTACT.formAction, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
        Alert.alert('Message Sent', 'Thank you! I will get back to you soon.');
      } else {
        Linking.openURL(`mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`);
        Alert.alert('Opened Email', 'You can send your message via email.');
      }
    } catch (err) {
      Linking.openURL(`mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + ' <' + email + '>')}`);
      Alert.alert('Opened Email', 'You can send your message via email.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}
    >
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Get in Touch</Text>
          <Text style={styles.subtitle}>
            Feel free to reach out! Whether you have a question, collaboration
            idea, or just want to connect, I'd love to hear from you.
          </Text>

          <View style={styles.contactInfo}>
            <TouchableOpacity style={styles.contactRow} onPress={openEmail}>
              <Ionicons name="mail-outline" size={20} color={COLORS.primary} style={styles.contactIcon} />
              <Text style={styles.contactText}>{CONTACT.email}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactRow} onPress={openPhone}>
              <Ionicons name="call-outline" size={20} color={COLORS.primary} style={styles.contactIcon} />
              <Text style={styles.contactText}>{CONTACT.phone}</Text>
            </TouchableOpacity>
            <View style={styles.contactRow}>
              <Ionicons name="location-outline" size={20} color={COLORS.primary} style={styles.contactIcon} />
              <Text style={styles.contactText}>{CONTACT.address}</Text>
            </View>
          </View>

          <View style={styles.socialRow}>
            {CONTACT.social.map((item) => (
              <TouchableOpacity
                key={item.name}
                style={styles.socialButton}
                onPress={() => openLink(item.url)}
              >
                <Text style={styles.socialText}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={styles.formTitle}>Send a Message</Text>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor={COLORS.textSecondary}
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor={COLORS.textSecondary}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Subject"
            placeholderTextColor={COLORS.textSecondary}
            value={subject}
            onChangeText={setSubject}
          />
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Message"
            placeholderTextColor={COLORS.textSecondary}
            value={message}
            onChangeText={setMessage}
            multiline
            numberOfLines={5}
          />
          <TouchableOpacity
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitText}>Send Message</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: SPACING.md,
    paddingBottom: SPACING.xl * 3,
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
    lineHeight: 22,
  },
  contactInfo: {
    marginBottom: SPACING.lg,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: SPACING.sm,
  },
  contactIcon: {
    marginRight: SPACING.sm,
  },
  contactText: {
    fontSize: FONTS.body,
    color: COLORS.text,
    flex: 1,
  },
  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: SPACING.sm,
    marginBottom: SPACING.lg,
    flexWrap: 'wrap',
  },
  socialButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: SPACING.md,
    paddingVertical: SPACING.sm,
    borderRadius: 8,
  },
  socialText: {
    color: COLORS.white,
    fontSize: FONTS.caption,
    fontWeight: '600',
  },
  formTitle: {
    fontSize: FONTS.subtitle,
    fontWeight: '600',
    color: COLORS.text,
    marginBottom: SPACING.md,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 8,
    padding: SPACING.md,
    marginBottom: SPACING.sm,
    fontSize: FONTS.body,
    color: COLORS.text,
  },
  textArea: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: COLORS.primary,
    padding: SPACING.md,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: SPACING.sm,
  },
  submitText: {
    color: COLORS.white,
    fontSize: FONTS.body,
    fontWeight: '600',
  },
});
