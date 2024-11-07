import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  NativeSyntheticEvent,
  TouchableOpacity,
  Pressable,
  TextInput,
  ActivityIndicator,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";
import img2 from "../../../assets/images/6538623.jpg";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "../../Components/Colors/Colors";
import axios from "axios";
import { API_URL } from "@env";
import { useAuth } from '../../Navigators/AuthContext'; 

export default function VerifyOTP({ navigation, route }) {
  const { setAuth } = useAuth();
  const isRegistered = route.params?.isRegistered;
  // console.log("rege", isRegistered);

  const mobileNumber = route.params?.mobileNumber;
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    try {
      const endpoint =
        isRegistered === 0
          ? `${API_URL}/auth/verify`
          : `${API_URL}/auth/verify-login`;

      const res = await axios.post(endpoint, {
        mobile_number: mobileNumber,
        otp: otp,
      });
      // console.log("Response:", res);

      setLoading(true);

      if (res.data.status === true) {
        Alert.alert("Success", res.data.message);
        console.log("respodata",res.data);
        
        const { token, user } = res.data;
        console.log("Token before navigation:", token);
        console.log("User before navigation:", user);
        setAuth(token, user);
        if (isRegistered === 0) {
          navigation.navigate("sign-up");
        } else {
          navigation.navigate("Home");
        }
      } else {
        Alert.alert("Error", res.data.message);
      }
    } catch (error) {
      console.log("Error Response:", error.response);
      Alert.alert("Error", error.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView className="bg-white">
      <View className="mx-auto pt-28">
        <Image className="w-52 h-52" source={img2} alt="Image" />
      </View>
      <Text className="text-center text-3xl font-semibold font-[outfit-medium]">
        Verify Your OTP
      </Text>
      <View className="px-10 pt-6">
        <View style={styles.container}>
          <View style={styles.fieldset}>
            <Text style={styles.legend}>Verify OTP</Text>
            <View style={styles.inputContainer}>
              <MaterialIcons
                name="verified-user"
                size={20}
                color="gray"
                style={styles.icon}
              />
              <TextInput
                placeholder="Enter OTP"
                style={styles.textInput}
                keyboardType="phone-pad"
                value={otp}
                onChangeText={setOtp}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center bg-white pt-8 px-10">
        <TouchableOpacity
          style={styles.button}
          //  onPress={()=>{
          //   navigation.navigate("Home");
          // }}
          onPress={handleVerify}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-center text-base font-[outfit]">
              Verify
            </Text>
          )}
        </TouchableOpacity>
      </View>
      <Pressable className="flex flex-row mx-auto pt-7">
        <Text className="font-[outfit]">Already have an account?</Text>
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
    fontFamily: "outfit",
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
    fontFamily: "outfit",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    fontFamily: "outfit",
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
    fontFamily: "outfit",
  },
});
