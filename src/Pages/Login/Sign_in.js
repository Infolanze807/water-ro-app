import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Entypo1 from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import img2 from "../../../assets/images/5191079.jpg";
import colors from "../../Components/Colors/Colors";
import axios from "axios";
import { API_URL } from "@env";

const Sign_in = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const isRegistered = 1;

  const handleLogin = async () => {
    if (!mobileNumber) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        mobile_number: `+91${mobileNumber}`,
      });
      console.log("hIfosklajdjw", res);

      setLoading(true);

      if (res.data.status === true) {
        Alert.alert("Success", res.data.message);
        navigation.navigate("verify", {
          mobileNumber: `+91${mobileNumber}`,
          isRegistered,
        });
        setMobileNumber("");
      } else {
        Alert.alert("Error", res.data.message);
      }
    } catch (error) {
      console.log("Error Responsepppppppppp:", error);
      console.log("Error hello:", error.message);
      Alert.alert("", error.response?.data?.message || "Server error");
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
        Let's Sign In
      </Text>
      <View className="px-10 pt-6">
        <View style={styles.container}>
          <View style={styles.fieldset}>
            <Text style={styles.legend}>Mobile Number</Text>
            <View style={styles.inputContainer}>
              <Entypo name="phone" size={18} color="gray" style={styles.icon} />
              <Text style={styles.prefix}>+91</Text>
              <TextInput
                placeholder="Enter Your Phone"
                style={styles.textInput}
                keyboardType="phone-pad"
                value={mobileNumber}
                onChangeText={setMobileNumber}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center bg-white pt-8 px-10">
        <TouchableOpacity
          // onPress={()=>{
          //   navigation.navigate("Home");
          // }}
          onPress={handleLogin}
          style={styles.button}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-center text-base font-[outfit]">
              Sign In
            </Text>
          )}
        </TouchableOpacity>
      </View>
      {/* <View className="flex flex-row gap-6 justify-center mt-5">
        <Entypo name="twitter-with-circle" size={28} color={colors.primary} />
        <FontAwesome name="google-plus-official" size={28} color="red" />
        <Entypo1 name="linkedin-with-circle" size={28} color={colors.primary} />
      </View> */}
      <Pressable className="flex flex-row mx-auto pt-8">
        <Text className="font-[outfit]">Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("sign-up");
          }}
        >
          <Text style={styles.SignUp}> Sign Up</Text>
        </TouchableOpacity>
      </Pressable>
    </ScrollView>
  );
};

export default Sign_in;

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
  SignUp: {
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
    color: "#4B5563",
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
    fontFamily: "outfit",
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    paddingLeft: 6,
  },
});
