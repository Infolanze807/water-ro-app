import { View, Text, ScrollView, TouchableOpacity, FlatList, Image } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import img from '../../../assets/images/water-filters-glasses-water-ice.jpg';
import img1 from '../../../assets/images/strong-base-anion-isoporous-250x250.webp';
import img2 from '../../../assets/images//strong-acid-cation-resin-water-demineralization-softening-resin-250x250.webp';
import img3 from '../../../assets/images//mixed-bed-super-charge-resin-sdi-250x250.webp';
import img4 from '../../../assets/images/strong-cation-resin-csa-121-250x250.webp';
import img5 from '../../../assets/images/strong-base-anion-isoporous-250x250.webp';
import img6 from '../../../assets/images/resin-ion-exchange-250x250.webp';


const ViewAll = ({navigation}) => {
    const data = [
        {
          id: "1",
          img: img1,
          name: "Demineralization Resin",
          price: "$10/KG"
        },
        {
          id: "2",
          img: img2,
          name: "Softening Resin",
          price: "$15/KG"
        },
        {
          id: "3",
          img: img3,
          name: "Iron Removal Resin",
          price: "$30/KG"
        },
        {
          id: "4",
          img: img4,
          name: "Ion Exchange Resin",
          price: "$50/KG"
        },
        {
          id: "5",
          img: img5,
          name: "Anion Resin",
          price: "$20/KG"
        },
        {
          id: "6",
          img: img6,
          name: "Cnc Wire Cut Edm",
          price: "$25/KG"
        },
      ];
  return (
    <View className='pt-9 px-3'>
      <View className="flex flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack('-1')}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text className="text-base text-[23px] mx-3">Products</Text>
        </View>
        <View>
        <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10,display:'flex' ,padding:10 , marginBottom:70}}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                padding: 10,
                backgroundColor: "white",
                borderRadius: 15,
                marginBottom: 15,
                flexDirection: "row",
                gap: 20,
                alignItems:'center'
              }}
            >
              <Image
                source={item.img}
                style={{ height: 100, width: 100, borderRadius: 15 }}
              />
              <View style={{ gap: 3, display: "flex" }}>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 15,
                  }}
                >
                  {item.name}
                </Text>
                <Text style={{  fontSize: 19 }}>
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

export default ViewAll