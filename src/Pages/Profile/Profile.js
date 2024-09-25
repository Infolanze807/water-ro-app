import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import colors from '../../Components/Colors/Colors';


const Profile = ({navigation}) => {
  const profileMenu = [
    {
      id: 1,
      name: "Home",
      icon: "home",
      action: () => {
        navigation.navigate('HomeTab');
      },
    },
    {
      id: 2,
      name: "Calculator",
      icon: "calculator",
      action: () => {
        navigation.navigate('calculator');
      },
    },
    {
      id: 3,
      name: "Contact Us",
      icon: "mail",
      action: () => {
       navigation.navigate('contactus')
      }
    },
    {
      id: 4,
      name: "Logout",
      icon: "log-out",
      action: async () => {
        navigation.navigate('sign-up')
      },
    },
  ];
  return (
    <ScrollView style={{backgroundColor:'white',height:'100%'}}>
      <View style={{ padding: 20, backgroundColor:colors.primary,borderBottomLeftRadius:30,borderBottomRightRadius:30}}>
        
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            paddingTop:80
          }}
        >
          <View style={styles.userIcon}>
            <Text style={styles.userIconText}>N</Text>
          </View>
          <Text
            style={{
              fontSize: 26,
              color: "white",
    fontFamily:'outfit-medium'

            }}
          >
           Infolanze Tech
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: "white",
    fontFamily:'outfit'

            }}
          >
            techteam.infolanze@gmail.com
          </Text>
        </View>
      </View>
      <View style={{ paddingTop: 100 }}>
        <FlatList
          data={profileMenu}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                marginBottom: 20,
                paddingHorizontal: 80,
              }}
              onPress={item.action}
           
              
            >
              <Ionicons name={item.icon} size={35} color={colors.primary} />
              <Text style={{  fontSize: 20,
    fontFamily:'outfit'

               }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </ScrollView>
  )
}

export default Profile

const styles= StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 19,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  userHeader: {
    display: 'flex',
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userIcon: {
    padding: 20,
    paddingHorizontal: 28,
    borderRadius: 99,
    backgroundColor: colors.white
  },
  userIconText: {
    fontSize: 25,
    fontWeight: "600",
    color:'black'
  },
  userName: {

  },
  userText: {
    fontSize: 15,
    color: colors.white,
  },  
  userNameText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
  },
})