import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import img from "../../../assets/images/4140045.jpg"
import colors from '../Colors/Colors'

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={img} alt='Image' />
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.mainSecond}>
          <Text style={styles.mainMain}>Welcome to Doshion Poly Science Pvt. Ltd.</Text>
          <Text style={styles.subMain}>Your most realiable resource for all your Water RO plant</Text>
        </View>
        <View style={styles.subSecond}>
          <TouchableOpacity style={styles.button} onPress={() => {
              navigation.navigate("sign-up");
            }}>
            <Text style={styles.buttonText}>Get Started</Text>
          </TouchableOpacity>
          <View style={styles.mainLogin}>
            <Text style={styles.subLogin}>Already have an account?</Text>
            <TouchableOpacity onPress={() => {
              navigation.navigate("sign-in");
            }}>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default LandingPage;

const styles= StyleSheet.create({
   container: {
    flex: 1,
   },
   mainContainer: {
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
      },
      android: {
        elevation: 7,
      },
    }),
    borderRadius: 20,
   },
   secondContainer: {
    flex:4,
    paddingHorizontal: 20,
    backgroundColor: 'white'
   },
   mainSecond: {
    // backgroundColor: 'green',
    flex: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
   },
   subSecond: {
    flex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
   },
   image: {
    height: 200,
    width: 200,
   },
   mainMain: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
   },
   subMain: {
    fontSize: 14,
    textAlign: 'center',
    paddingTop: 3,
    color: colors.gray,
    paddingHorizontal: 15,
   },
   button: {
    backgroundColor: colors.primary,
    width: '100%',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 12,
   },
   buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: "600",
   },
   mainLogin: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    paddingTop: 8,
   },
   subLogin: {
    color: colors.gray,
   },
   login: {
    color: colors.primary,
   },
})