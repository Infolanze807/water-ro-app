import React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from "react-native";
import colors from "../Colors/Colors";
import img from "../../../assets/images/contactUs.png";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";


export default function App({navigation}) {
  return (
    // <ScrollView>
    <View style={styles.container}>
      <TouchableOpacity style={{position:'absolute',left:15,top:35,zIndex:99}} onPress={() => navigation.goBack("-1")}>
            <Ionicons name="arrow-back" size={28} color={colors.white} />
          </TouchableOpacity>
      <View style={styles.mainContainer}>
        <Image source={img} style={{ height: "65%", width: "65%",marginHorizontal:'auto',marginVertical:'auto' }} />
      </View>
      <View style={styles.subContainer}>
        <View style={{ paddingHorizontal: 35, marginTop: -30 }}>
          <View
            style={{
              borderWidth: 0,
              backgroundColor: colors.white,
              shadowColor: "#000",
              borderRadius: 12,
              paddingVertical: 30,
              position: "relative",
              // shadowOffset: { width: 0, height: 1 },
              // shadowOpacity: 0.9,
              // shadowRadius: 2,
              elevation: 7,
            }}
          >
            <Text style={styles.header}>GET IN TOUCH!</Text>
            <View style={styles.form}>
              <View>
              <Text style={styles.text}>Name</Text>
              <TextInput style={styles.input} placeholder="Enter Name" />
              </View>
              <View>
              <Text style={styles.text}>E-mail</Text>
              <TextInput style={styles.input} placeholder="Enter E-mail" />
              </View>
              <View>
              <Text style={styles.text}>Message</Text>
              <TextInput
                style={[styles.input]}
                placeholder="Enter Message"
                multiline
              />
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              left: "50%",
              bottom: -30,
            }}
          >
            <View
              style={{
                backgroundColor: colors.primary,
                borderRadius: 99,
                // width: 55,
                padding: 13,
                paddingRight: 17,
                paddingTop: 16,
              }}
            >
              <FontAwesome name="send" size={30} color="white" />
            </View>
          </View>
        </View>
      </View>
    </View>
    // </ScrollView>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  container: {
    // paddingHorizontal: 20,
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: colors.black,
    paddingTop: 10,
  },
  form: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 10,
    padding: 20,
  },
  input: {
    borderColor: "#ddd",
    borderBottomWidth: 1,
    // borderRadius: 5,
    // paddingHorizontal: 10,
    marginBottom: 25,
    backgroundColor: "white",
  },
  sendButton: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sendButtonText: {
    color: "white",
    fontSize: 18,
  },
  mainContainer: {
    flex: 3,
    backgroundColor: colors.primary,
    // justifyContent: "center",
    // alignItems: "center",
  },
  subContainer: {
    flex: 4,
    backgroundColor: colors.white,
  },
  text:{
    color:colors.primary,
    fontWeight:'600',
    fontSize:13
  }
});