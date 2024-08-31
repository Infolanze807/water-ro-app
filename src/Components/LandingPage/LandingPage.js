import { View, Text, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native'
import React from 'react'
import img from "../../../assets/images/2300380-removebg-preview.png"
import colors from '../Colors/Colors'
import { Path, Svg } from 'react-native-svg'

const LandingPage = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Image style={styles.image} source={img} alt='Image' />
        <View style={styles.curveWrapper}>
          <View style={styles.curveContainer}>
            <Svg
              height="100%"
              width="100%"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <Path
                fill={colors.white}
                 d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              />
            </Svg>
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <View style={styles.mainSecond}>
          <Text style={styles.mainMain}>Doshion Techcenter</Text>
          <Text style={styles.subMain}>Technology in to your hands</Text>
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
   curveWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    overflow: 'hidden',
    zIndex: 1,
  },
  curveContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 80,
    overflow: 'hidden',
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
    height: 280,
    width: 280,
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