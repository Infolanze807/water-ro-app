import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import React from 'react';
import img from '../../../assets/images/react-logo.png';

const Home = () => {
  const data = [
    {
      id: "1",
      img: img,
      name: "Apple ",
      price: "$10/KG"
    },
    {
      id: "2",
      img: img,
      name: "Orange",
      price: "$15/KG"
    },
    {
      id: "3",
      img: img,
      name: "Kiwi",
      price: "$30/KG"
    },
    {
      id: "4",
      img: img,
      name: "Dragon",
      price: "$50/KG"
    },
    {
      id: "5",
      img: img,
      name: "Banana",
      price: "$20/KG"
    },
    {
      id: "6",
      img: img,
      name: "Mango",
      price: "$25/KG"
    },
    {
      id: "7",
      img: img,
      name: "Grapes",
      price: "$35/KG"
    },
    {
      id: "8",
      img: img,
      name: "Pineapple",
      price: "$40/KG"
    },
    {
      id: "9",
      img: img,
      name: "Watermelon",
      price: "$30/KG"
    }
  ];

  const renderItem = ({ item }) => (
    <View className="w-36 h-48 p-4 bg-gray-300 rounded-lg m-2 flex items-center justify-center">
      <Image source={item.img} className="w-24 h-24" />
      <Text className="mt-2">{item.name}</Text>
      <Text className="text-gray-600">{item.price}</Text>
    </View>
  );

  return (
    <ScrollView className="bg-white h-full" showsVerticalScrollIndicator={false}>
      <View className='h-48 w-full border  border-red-700'>
      <Image source={img} className="h-full border-2 border-black " />
      </View>
      <View>
        <Text className='text-xl p-2 '>Products</Text>
      </View>
      <View>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ justifyContent: 'center', alignItems: 'center' }}
        />
      </View>
    </ScrollView>
  );
};

export default Home;
