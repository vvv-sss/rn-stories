import React from 'react';
import {AntDesign, Feather} from '@expo/vector-icons';
import {Tabs} from 'expo-router';
import {View, StyleSheet} from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          position: 'absolute',
          left: 50,
          right: 50,
          height: 100,
          borderTopWidth: 0,
          bottom: 20,
          backgroundColor: 'transparent',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: focused ? 'rgba(255, 255, 255, 0.2)' : 'transparent'},
              ]}>
              <AntDesign
                name="info"
                size={30}
                color={color}
              />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="content"
        options={{
          tabBarIcon: ({color, focused}) => (
            <View
              style={[
                styles.iconContainer,
                {backgroundColor: focused ? 'rgba(255, 255, 255, 0.2)' : 'transparent'},
              ]}>
              <Feather
                name="list"
                size={30}
                color={color}
              />
            </View>
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
