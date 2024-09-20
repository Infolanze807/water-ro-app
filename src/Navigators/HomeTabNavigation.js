import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, StyleSheet } from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Home from '../Pages/Home/Home';
import Calculator from '../Pages/Calculator/Calculator';
import colors from '../Components/Colors/Colors';
import Profile from '../Pages/Profile/Profile';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;

          if (route.name === 'HomeTab') {
            iconName = 'house-chimney';
          } else if (route.name === 'Calculator') {
            iconName = 'calculator';
          } else if (route.name === 'Profile') {
            iconName = 'user-large';
          }
          return <FontAwesome6 name={iconName} size={18} color={color} />;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={Home} 
        options={{
          headerShown: false,
          headerTintColor: colors.white,
          headerStyle: { backgroundColor: colors.primary },
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.focusedLabel]}>Home</Text>
          ),
        }} 
      />
      <Tab.Screen 
        name="Calculator" 
        component={Calculator} 
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.focusedLabel]}>Calculator</Text>
          ),
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
          headerShown: false,
          tabBarLabel: ({ focused }) => (
            <Text style={[styles.tabLabel, focused && styles.focusedLabel]}>Profile</Text>
          ),
        }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabLabel: {
    fontFamily: 'outfit', // Your desired font family
    fontSize: 14, // Adjust as needed
    color: colors.gray, // Default color for inactive state
  },
  focusedLabel: {
    color: colors.primary, // Change color for active state
    fontFamily:'outfit-medium' // Optional: make focused label bold
  },
});