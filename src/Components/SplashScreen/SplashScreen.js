import { View, Text, Image } from 'react-native'
import React from 'react'
import img1 from "../../../assets/images/Vanilla@1x-1.8s-280px-250px.png"

const SplashScreen = ({transition}) => {
  return (
    <View className={`flex items-center justify-center h-full ${transition ? 'opacity-100' : 'opacity-0'}`}>
     <Image source={img1} alt='Image' className='h-[200px]'/>
    </View>
  )
}

export default SplashScreen;