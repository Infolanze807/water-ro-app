import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconName2;

          if (route.name === 'Home') {
            iconName = focused ? 'house-chimney' : 'house-chimney';
          } else if (route.name === 'Calculator') {
            iconName = focused ? 'calculator' : 'calculator';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-large' : 'user-large';
          }
          return<FontAwesome6 name={iconName} size={18} color={color} /> ;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.gray,
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{headerShown: false, headerTintColor: colors.white, headerStyle: {backgroundColor: colors.primary}}} />
      <Tab.Screen name="Calculator" component={Calculator} options={{headerShown: true}} />
      <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}} />
    </Tab.Navigator>
  );
}
