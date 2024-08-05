import { ImageBackground, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import img from "../../../assets/images/Sign_up_bg.png";
import Entypo from '@expo/vector-icons/Entypo';
import Entypo1 from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';



const Sign_in = ({navigation}) => {
  return (
    <View className='bg-white h-full'>
          <ImageBackground source={img} resizeMode='cover'>
          <View className='p-6 pt-11 bg-primar h-96'>
      <Text className="text-[18px] text-white">Hello,</Text>
      <Text className='text-[35px] text-white'>Sign In!</Text>
      </View>
      <View className='p-10 '>
        <View>
        <Text>Mobile Number</Text>
        <View className="flex flex-row items-center border border-gray-300 rounded-lg p-1.5">
              <Entypo name="phone" size={18} color="gray" className="mr-2" />
              <Text className='pl-2 text-base'>+91</Text>
              <TextInput 
                placeholder="Enter Your Phone" 
                className="flex-1 text-base pl-1"
                keyboardType="phone-pad"
              />
            </View>
        </View>
        <Pressable onPress={()=>{
            navigation.navigate('sign-up');
        }}>
        <Text className='text-right text-red-700'>doesn't have account?</Text>
        </Pressable>
        </View>
        <View className="flex justify-center items-center bg-white">
        <TouchableOpacity onPress={()=>{
            navigation.navigate('Home')
        }} style={styles.button}>
          <Text className="text-white text-center text-[18px]">Sign In</Text>
        </TouchableOpacity>
      </View>
      <View className='flex flex-row gap-6 justify-center mt-5'>
      <Entypo name="twitter-with-circle" size={28} color='blue'/>
      <FontAwesome name="google-plus-official" size={28} color="red" />
      <Entypo1 name="linkedin-with-circle" size={28} color="blue" />
      </View>
      </ImageBackground>
    </View>
  )
}

export default Sign_in

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#3034E9',
        padding: 12,
        borderRadius: 9999,
        width: 220,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3.84,
        elevation: 5,
      },
})