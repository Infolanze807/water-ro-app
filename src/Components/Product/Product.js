import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Product = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <View className="flex-1 pt-8 px-3 bg-white">
        <View className="flex flex-row items-center">
          <TouchableOpacity onPress={() => navigation.goBack('-1')}>
            <Ionicons name="arrow-back" size={28} color="black" />
          </TouchableOpacity>
          <Text className="text-base text-[23px] mx-3">Product Details</Text>
        </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <View className="flex justify-center items-center mt-5">
          <Image source={product.img} className="w-full h-[290px]" />
          <Text className="mt-2 text-lg">{product.name}</Text>
          <Text className="text-gray-600 text-base">{product.price}</Text>
        </View>
        <View className="mt-5">
          <Text className="text-base mb-3">Product Specifications</Text>
          <View className="flex flex-row justify-between pb-20">
            <View>
              <Text className="text-gray-400 text-base">Tank Capacity</Text>
              <Text className="text-gray-400 text-base">Country of Origin</Text>
              <Text className="text-gray-400 text-base">Cooler Type</Text>
              <Text className="text-gray-400 text-base">Air throw coverage</Text>
              <Text className="text-gray-400 text-base">Brand</Text>
              <Text className="text-gray-400 text-base">Material</Text>
              <Text className="text-gray-400 text-base">Minimum Order</Text>
              <Text className="text-gray-400 text-base">Quantity</Text>
              <Text className="text-gray-400 text-base">Product Brochure</Text>
            </View>
            <View>
              <Text className="text-base">90 L</Text>
              <Text className="text-base">India</Text>
              <Text className="text-base">Desert</Text>
              <Text className="text-base">60 ft</Text>
              <Text className="text-base">Powerteck</Text>
              <Text className="text-base">ABS</Text>
              <Text className="text-base">10</Text>
              <Text className="text-base">20</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
              <Text className="text-base">PDF</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="absolute bottom-0 left-0 right-0 bg-white p-2 flex flex-row">
        <TouchableOpacity className="flex-1 p-4 border  rounded-full mx-1">
          <Text className="text-center  text-lg">Message</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 p-4 border rounded-full mx-1">
          <Text className="text-center text-lg">Book Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;
