import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import AboutScreen from './src/screens/AboutScreen';
import WorkHomeScreen from './src/screens/WorkHomeScreen';
import ExperienceScreen from './src/screens/ExperienceScreen';
import ProjectsScreen from './src/screens/ProjectsScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import HustlesScreen from './src/screens/HustlesScreen';
import ContactScreen from './src/screens/ContactScreen';

import { COLORS } from './src/constants/theme';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function WorkStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: COLORS.primary },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '600', fontSize: 18 },
      }}
    >
      <Stack.Screen name="WorkHome" component={WorkHomeScreen} options={{ title: 'Work' }} />
      <Stack.Screen name="Experience" component={ExperienceScreen} />
      <Stack.Screen name="Projects" component={ProjectsScreen} />
      <Stack.Screen name="Services" component={ServicesScreen} />
    </Stack.Navigator>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const icons = {
            Home: focused ? 'home' : 'home-outline',
            About: focused ? 'person' : 'person-outline',
            Work: focused ? 'briefcase' : 'briefcase-outline',
            Hustles: focused ? 'rocket' : 'rocket-outline',
            Contact: focused ? 'mail' : 'mail-outline',
          };
          return <Ionicons name={icons[route.name] || 'ellipse'} size={size} color={color} />;
        },
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: '#666',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: COLORS.border,
          paddingBottom: 4,
          paddingTop: 4,
          height: 60,
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        headerStyle: {
          backgroundColor: COLORS.primary,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: '600',
          fontSize: 18,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen
        name="Work"
        component={WorkStack}
        options={{
          headerShown: false,
          tabBarLabel: 'Work',
        }}
      />
      <Tab.Screen name="Hustles" component={HustlesScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <MainTabs />
    </NavigationContainer>
  );
}
