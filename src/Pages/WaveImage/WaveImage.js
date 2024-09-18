import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import img from '../../../assets/images/Vanilla.png'; // Ensure this path is correct

const WaveImage = () => {
  const navigation = useNavigation(); // Hook to access navigation
  const scaleValue = useRef(new Animated.Value(0)).current; // Start with scale of 0 (small)

  useEffect(() => {
    // Start the scaling animation
    Animated.timing(scaleValue, {
      toValue: 1, // Scale to original size
      duration: 2000, // Duration of the animation (2 seconds)
      useNativeDriver: true,
    }).start();

    // Redirect to landing page after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace('landingpage'); // Redirect to LandingPage
    }, 3000); // Adjust time as needed

    // Cleanup the timer on unmount
    return () => clearTimeout(timer);
  }, [scaleValue, navigation]);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: scaleValue }] }}>
        <Image
          source={img}
          style={styles.image}
        />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  image: {
    width: 300, // Adjust as needed
    height: 300, // Adjust as needed
    resizeMode: 'contain',
  },
});

export default WaveImage;
