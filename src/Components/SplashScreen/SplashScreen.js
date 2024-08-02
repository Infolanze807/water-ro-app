import { View, Text, Image } from 'react-native'
import React from 'react'
import img1 from "../../../assets/images/react-logo.png"

const SplashScreen = () => {
  return (
    <View className='flex items-center justify-center h-full'>
     <Image source={img1} alt='Image' className='h-10 w-10'/>
    </View>
  )
}

export default SplashScreen