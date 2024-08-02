import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo1 from '@expo/vector-icons/Entypo';

const Sign_up = () => {
  return (
    <View>
        <View className='p-6 pt-11 bg-primary h-72'>
      <Text className="text-[18px] text-white">Hello,</Text>
      <Text className='text-[35px] text-white'>Sign Up!</Text>
      </View>
      <View className='p-10  flex gap-4'>
        <View>
        <Text>Mobile Number</Text>
        <TextInput placeholder='Enter a mobile number' className='border border-gray-400 rounded-lg p-1 px-2'/>
        </View>
        <View>
        <Text>City</Text>
        <TextInput placeholder='Enter a city' keyboardType='numeric' className='border border-gray-400 rounded-lg p-1 px-2'/>
        </View>
        <View>
        <Text>Company Name</Text>
        <TextInput placeholder='Enter a company name' className='border border-gray-400 rounded-lg p-1 px-2'/>
        </View>
      </View>
      <View className="flex justify-center items-center bg-white">
        <TouchableOpacity style={styles.button}>
          <Text className="text-white text-center text-[18px]">Sign up</Text>
        </TouchableOpacity>
      </View>
      <View className='flex flex-row gap-6 justify-center mt-5'>
      <Entypo name="twitter-with-circle" size={28} color='blue'/>
      <FontAwesome name="google-plus-official" size={28} color="red" />
      <Entypo1 name="linkedin-with-circle" size={28} color="blue" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: '#3034E9', // Adjust this color to match your primary color
      padding: 12,
      borderRadius: 9999,
      width: 220,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3.84,
      elevation: 5,
    },
  });
export default Sign_up