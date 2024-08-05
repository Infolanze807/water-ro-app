import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import Sign_up from "./src/Pages/Regestration/Sign_up";
import SplashScreen from "./src/Components/SplashScreen/SplashScreen";

import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/Pages/Home/Home";
import Sign_in from "./src/Pages/Login/Sign_in";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
  const Stack = createStackNavigator();

  return (
    <View className="pt-7">
      <NavigationContainer>
        <Stack.Navigator initialRouteName="sign-up">
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="sign-up" component={Sign_up} />
          <Stack.Screen name="sign-in" component={Sign_in} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
