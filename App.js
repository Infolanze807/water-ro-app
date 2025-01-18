import React, { useEffect } from "react";
import Sign_up from "./src/Pages/Regestration/Sign_up";
import { StatusBar, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Sign_in from "./src/Pages/Login/Sign_in";
import { NavigationContainer } from "@react-navigation/native";
import HomeTabNavigation from "./src/Navigators/HomeTabNavigation";
import VerifyOTP from "./src/Pages/VerifyOTP/VerifyOTP";
import Product from "./src/Components/Product/Product";
import ViewAll from "./src/Components/ViewAll/ViewAll";
import LandingPage from "./src/Components/LandingPage/LandingPage";
import Calculator from "./src/Pages/Calculator/Calculator";
import ContactUs from "./src/Components/ContactUs/ContactUs";
import WaveImage from "./src/Pages/WaveImage/WaveImage";
import { useFonts } from "expo-font";
import { AuthProvider } from "./src/Navigators/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import VideoSplashScreen from "./src/Components/SplashScreen/VideoSplashScreen";

const App = () => {
  const [fontsLoaded, fontError] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-Medium.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  const Stack = createStackNavigator();
  const [initialRoute, setInitialRoute] = React.useState('null');
  // const [isAppReady, setIsAppReady] = React.useState(false);

  const checkLoginStatus = async () => {
    try {
      const savedLoginTime = await AsyncStorage.getItem("loginTimestamp");
      
      if (savedLoginTime) {
        const loginTime = new Date(parseInt(savedLoginTime));
        const currentTime = new Date();
        
        const timeDifference = (currentTime - loginTime) / (1000 * 60 * 60);

        if (timeDifference > 168) {
          return "landingpage";
        } else {
          return "Home";
        }
      } else {
        return "landingpage";
      }
    } catch (error) {
      console.error("Error checking login status:", error);
      return "landingpage";
    }
  };


  useEffect(() => {
    const initializeApp = async () => {
      const route = await checkLoginStatus();
      setInitialRoute(route);
      // setIsAppReady(true);
    };
    initializeApp();
  }, []);

  if (!initialRoute) {
    return <View><Text> </Text></View>;
  }

  // if (!isAppReady) {
  //   return <VideoSplashScreen onFinish={() => setIsAppReady(true)} />;
  // }

  return (
    <>
    <AuthProvider>
      <StatusBar hidden={false} barStyle="dark-content" backgroundColor="white" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={HomeTabNavigation} />
          <Stack.Screen name="sign-up" component={Sign_up} />
          <Stack.Screen name="sign-in" component={Sign_in} />
          <Stack.Screen name="verify" component={VerifyOTP} />
          <Stack.Screen name="product" component={Product} />
          <Stack.Screen name="viewall" component={ViewAll} />
          <Stack.Screen name="landingpage" component={LandingPage} />
          <Stack.Screen name="calculator" component={Calculator} />
          <Stack.Screen name="contactus" component={ContactUs} />
          <Stack.Screen name="waveImage" component={WaveImage} />
        </Stack.Navigator>
      </NavigationContainer>
      </AuthProvider>
    </>
  );
};

export default App;
