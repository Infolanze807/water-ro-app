import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Home from '../Pages/Home/Home';
import Calculator from '../Pages/Calculator/Calculator';

const Tab = createBottomTabNavigator();

export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator-outline';
          }
          return <Ionicons name={iconName} size={20} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Calculator" component={Calculator} />
    </Tab.Navigator>
  );
}