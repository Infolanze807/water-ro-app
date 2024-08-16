import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Pressable,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Entypo1 from "@expo/vector-icons/Entypo";
import img2 from "../../../assets/images/6368592.jpg";
import colors from "../../Components/Colors/Colors";
import axios from "axios";

const Sign_up = ({ navigation }) => {
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const handleSignUp = async () => {
    if (!companyName || !city || !mobileNumber) {
      Alert.alert("Error", "All fields are required.");
      return;
    }
  
    try {
      const response = await axios.post("http://192.168.29.111:3000/auth/register", {
        company_name: companyName,
        city: city,
        mobile_number: `+91${mobileNumber}`,
      });
      console.log("Responsesssss:", response);
  
      if (response.data.status === true) {
        Alert.alert("Success", response.data.message); 
        navigation.navigate("verify", { mobileNumber: `+91${mobileNumber}` });
      } else {
        Alert.alert("Error", response.data.message); 
      }
    } catch (error) {
      console.log("Error Response:", error.response); 
      Alert.alert("Error", error.response?.data?.message || "Server error");
    }
  };
  

  return (
    <ScrollView className="bg-white">
      <View className="mx-auto pt-16">
        <Image className="w-52 h-52" source={img2} alt="Image" />
      </View>
      <Text className="text-center text-3xl font-semibold">
        Create an Account
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
        <View style={styles.container}>
          <View style={styles.fieldset}>
            <Text style={styles.legend}>City</Text>
            <View style={styles.inputContainer}>
              <Entypo
                name="location-pin"
                size={20}
                color="gray"
                style={styles.icon}
              />
              <TextInput
                placeholder="Enter City Name"
                style={styles.textInput}
                value={city}
                onChangeText={setCity}
              />
            </View>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.fieldset}>
            <Text style={styles.legend}>Company Name</Text>
            <View style={styles.inputContainer}>
              <FontAwesome
                name="building"
                size={18}
                color="gray"
                style={styles.icon}
              />
              <TextInput
                placeholder="Enter Company Name"
                style={styles.textInput}
                value={companyName}
                onChangeText={setCompanyName}
              />
            </View>
          </View>
        </View>
      </View>
      <View className="flex justify-center items-center bg-white pt-8 px-10">
        {/* <TouchableOpacity onPress={handleSignUp} style={styles.button}> */}
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>

          <Text className="text-white text-center text-base">Sign up</Text>
        </TouchableOpacity>
      </View>
      <View className="flex flex-row gap-6 justify-center mt-5">
        <Entypo name="twitter-with-circle" size={28} color={colors.primary} />
        <FontAwesome name="google-plus-official" size={28} color="red" />
        <Entypo1 name="linkedin-with-circle" size={28} color={colors.primary} />
      </View>
          <Pressable className="flex flex-row mx-auto pt-7">
          <Text>Already have an account?</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("sign-in");
            }}
          >
            <Text style={styles.SignIn}> Sign In</Text>
          </TouchableOpacity>
        </Pressable>
    </ScrollView>
  );
};

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
    color: "#4B5563", 
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
export default Sign_up;
