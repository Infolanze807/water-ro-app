import React from "react";
import Sign_up from "./src/Pages/Regestration/Sign_up";
import { createStackNavigator } from "@react-navigation/stack";
import Sign_in from "./src/Pages/Login/Sign_in";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabNavigation from "./src/Navigators/HomeTabNavigation";
import VerifyOTP from "./src/Pages/VerifyOTP/VerifyOTP"
import Product from "./src/Components/Product/Product";
import ViewAll from "./src/Components/ViewAll/ViewAll";
import LandingPage from "./src/Components/LandingPage/LandingPage";
import Calculator from "./src/Pages/Calculator/Calculator";
import ContactUs from "./src/Components/ContactUs/ContactUs";

const App = () => {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="landingpage" screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={HomeTabNavigation} />
          <Stack.Screen name="sign-up" component={Sign_up} />
          <Stack.Screen name="sign-in" component={Sign_in} />
          <Stack.Screen name="verify" component={VerifyOTP} />
          <Stack.Screen name="product" component={Product} />
          <Stack.Screen name="viewall" component={ViewAll} />
          <Stack.Screen name="landingpage" component={LandingPage} />
          <Stack.Screen name="calculator" component={Calculator} />
          <Stack.Screen name="contactus" component={ContactUs} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
