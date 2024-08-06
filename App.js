import React from "react";
import Sign_up from "./src/Pages/Regestration/Sign_up";
import { createStackNavigator } from "@react-navigation/stack";
import Sign_in from "./src/Pages/Login/Sign_in";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabNavigation from "./src/Navigators/HomeTabNavigation";
import VerifyOTP from "./src/Pages/VerifyOTP/VerifyOTP"
import Product from "./src/Components/Product/Product";

const App = () => {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="sign-up" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeTabNavigation} />
          <Stack.Screen name="sign-up" component={Sign_up} />
          <Stack.Screen name="sign-in" component={Sign_in} />
          <Stack.Screen name="verify" component={VerifyOTP} />
          <Stack.Screen name="product" component={Product} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
