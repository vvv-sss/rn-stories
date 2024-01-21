import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {Tabs} from 'expo-router';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return (
    <FontAwesome
      size={28}
      style={{marginBottom: -3}}
      {...props}
    />
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'About',
          tabBarIcon: ({color}) => (
            <TabBarIcon
              name="code"
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="content"
        options={{
          title: 'Content',
          tabBarIcon: ({color}) => (
            <TabBarIcon
              name="code"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
