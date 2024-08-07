import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Pressable, TextInput, Alert } from "react-native";
import React, { useState } from "react";
import img2 from "../../../assets/images/6538623.jpg";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import colors from "../../Components/Colors/Colors";
import axios from "axios";

export default function VerifyOTP({navigation}) {

  const [otp, setOtp] = useState('');

  const handleVerify = async () => {
    try {
      const res = await axios.post('http://192.168.29.111:3000/auth/verify', {
        mobile_number: `+91${'9898656562'}`,
        otp: otp
      });
      if (res.data.status === true) {
        Alert.alert("Success", res.data.message);  // Display success message from server
        navigation.navigate("Home");
      } else {
        Alert.alert("Error", res.data.message);  // Display error message from server
      }
    } catch (error) {
      console.log("Error Response:", error.res);  // Log error response for debugging
      Alert.alert("Error", error.res?.data?.message || "Server error");
    }
  }

  return (
    <ScrollView className="bg-white">
      <View className="mx-auto pt-32">
        <Image className="w-52 h-52" source={img2} alt="Image" />
      </View>
      <Text className="text-center text-3xl font-semibold">
        Verify Your OTP
      </Text>
      <View className="px-10 pt-6">
        <View style={styles.container}>
          <View style={styles.fieldset}>
            <Text style={styles.legend}>Verify OTP</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons name="verified-user" size={20} color="gray" style={styles.icon} />
              <TextInput
                placeholder="Enter OTP"
                style={styles.textInput}
                keyboardType="phone-pad"
                value={otp}
                onChangeText={setOtp}
                textContentType="oneTimeCode"
                autoComplete="sms-otp"
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center bg-white pt-8 px-10">
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text className="text-white text-center text-base">Verify</Text>
        </TouchableOpacity>
      </View>
      <Pressable className="flex flex-row mx-auto pt-7">
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("sign-up");
            }}
          >
            <Text style={styles.SignIn}> Sign In</Text>
          </TouchableOpacity>
        </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    button: {
      backgroundColor: colors.primary,
      padding: 9,
      borderRadius: 9999,
      width: "100%",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 3.84,
      elevation: 5,
    },
    container: {
      paddingTop: 20,
    },
    SignIn: {
      color: colors.primary,
    },
    fieldset: {
      borderWidth: 1,
      borderColor: "#D1D5DB",
      borderRadius: 5,
      padding: 8,
      position: "relative",
    },
    legend: {
      position: "absolute",
      top: -10,
      right: 10,
      backgroundColor: "#FFFFFF",
      paddingHorizontal: 5,
      fontSize: 12,
      color: "#4B5563", // gray-700
    },
    inputContainer: {
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginRight: 8,
    },
    prefix: {
      paddingLeft: 5,
      fontSize: 16,
    },
    textInput: {
      flex: 1,
      fontSize: 16,
      paddingLeft: 6,
    },
  });
