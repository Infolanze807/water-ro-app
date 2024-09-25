import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import img from "../../../assets/images/logomain2.png"; // Ensure this path is correct

const WaveImage = () => {
  const navigation = useNavigation(); 
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(scaleValue, {
      toValue: 1, 
      duration: 2000, 
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.replace('landingpage'); 
    }, 3000); 

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
