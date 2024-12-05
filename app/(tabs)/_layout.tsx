import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // headerShown: useClientOnlyValue(false, true),
        headerShown:false
      }}>
      <Tabs.Screen
        name="dolar"
        options={{
          title: 'Tab One',
          headerShown: false,
          tabBarShowLabel:false,
          href: null,
        }}
      />
      <Tabs.Screen
        name="euro"
        options={{
          title: 'Tab One',
          headerShown: false,
          tabBarShowLabel:false,
          href: null,
        }}
      />
    </Stack>
  );
}
