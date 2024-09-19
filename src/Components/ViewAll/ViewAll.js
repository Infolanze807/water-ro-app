import { View, Text, ScrollView, TouchableOpacity, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import colors from '../Colors/Colors';


const ViewAll = ({route, navigation}) => {

      const { data} = route.params;

  return (
    <View className='pt-9' style={styles.container}>
      <View className="flex flex-row items-center px-3 py-1.5">
          <TouchableOpacity onPress={() => navigation.goBack('-1')}>
            <Ionicons name="arrow-back" size={28} color={colors.white} />
          </TouchableOpacity>
          <Text className="text-2xl ml-2.5 font-semibold" style={styles.product}>Products</Text>
        </View>
        <View className='bg-white px-2'>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 5,display:'flex', padding:10, marginBottom:88 }}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => navigation.navigate('product', {product: item})}
              style={{
                padding: 10,
                backgroundColor: colors.lightGray,
                borderRadius: 15,
                marginBottom: 15,
                flexDirection: "row",
                gap: 20,
                alignItems:'center'
              }}
            >
              <Image
                source={{uri:item.coverimg}}
                style={{ height: 100, width: 100, borderRadius: 15 }}
              />
              <View style={{ gap: 3, display: "flex" }}>
                <Text
                  style={{
                    
                    fontSize: 17,
                  }}
                >
                  {item.title}
                </Text>
                <Text style={{  fontSize: 15, color: "gray" }}>
                  {item.price}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </ScrollView>
        </View>
    </View>
  )
}

export default ViewAll;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
  },
  product: {
    color: colors.white,
    fontFamily:'outfit'
  },
})