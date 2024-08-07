import { View, Text, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import img from '../../../assets/images/water-filters-glasses-water-ice.jpg';
import img1 from '../../../assets/images/strong-base-anion-isoporous-250x250.webp';
import img2 from '../../../assets/images//strong-acid-cation-resin-water-demineralization-softening-resin-250x250.webp';
import img3 from '../../../assets/images//mixed-bed-super-charge-resin-sdi-250x250.webp';
import img4 from '../../../assets/images/strong-cation-resin-csa-121-250x250.webp';
import img5 from '../../../assets/images/strong-base-anion-isoporous-250x250.webp';
import img6 from '../../../assets/images/resin-ion-exchange-250x250.webp';


const Home = ({navigation}) => {
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

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('product', {product: item})} style={styles.itemContainer}>
      <Image source={item.img} style={styles.itemImage} />
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.headerImage} />
      </View>
      <View style={styles.mainProduct}>
        <Text style={styles.headerText}>Products</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('viewall')}>
          <Text style={styles.seeAll}>View All</Text>
        </TouchableOpacity>
      </View>
    <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
      <View style={styles.productP}>
        <FlatList
          data={data}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      </View>
    </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  imageContainer: {
    height: "25%",
    width: '100%',
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },
  productP: {
    paddingBottom: 220,
    backgroundColor: '#f3f4f6',
  },
  mainProduct: {
    // backgroundColor: 'f3f4f6',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  seeAll: {
    fontSize: 14,
    color: 'gray'
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },
  flatListContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    width: 150,
    height: 190,
    padding: 8,
    borderColor: '#d1d5db',
    // borderWidth: 1,
    // backgroundColor: '#f3f4f6',
    backgroundColor: 'white',
    borderRadius: 6,
    margin: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: '100%',
    height: '73%',
    // borderTopLeftRadius: 6,
    // borderTopRightRadius: 6,
    borderRadius: 7,
  },
  itemName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500'
  },
  itemPrice: {
    color: 'black',
    fontSize: 12,
    // paddingBottom: 10,
  },
});
