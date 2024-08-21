import { View, Text, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import img from '../../../assets/images/water-filters-glasses-water-ice.jpg';
import colors from '../../Components/Colors/Colors';
import Octicons from '@expo/vector-icons/Octicons';
import axios from 'axios';

const bucketSlug = 'dashboard-production';
const objectType = 'products';
const cosmicReadKey = 'ccoIwYVf1HWujfu3nTptWHrCq8qidSApj6XJ0pyOJfjVDBDzWp';
const apiUrl = `https://api.cosmicjs.com/v3/buckets/${bucketSlug}/objects`;

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

    const selectedDatas=data.slice(0,6);
    
    useEffect(()=>{
      console.log("selected",selectedDatas);
    })
    
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            query: JSON.stringify({ type: objectType }),
            read_key: cosmicReadKey,
            depth: 2,
            props: 'slug,title,metadata',
          },
        });

        const datas = response.data.objects.map(data => ({
          id: data._id,
          title: data.title,
          coverimg: data.metadata.cover_img.url,
          detailimg: data.metadata.detail_img.url,
          productdoc: data.metadata.product_doc.url,
        }));
        console.log(datas);
        

        setData(datas);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('product', { product: item })} style={styles.itemContainer}>
      <Image source={{ uri: item.coverimg }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <View style={styles.mainContainer}>
        <View style={styles.userHeader}>
          <View style={styles.userIcon}>
            <Text style={styles.userIconText}>N</Text>
          </View>
          <View style={styles.userName}>
            <Text style={styles.userText}>Welcome</Text>
            <Text style={styles.userNameText}>Infolanze Tech</Text>
          </View>
        </View>
        <View style={styles.homeIcon}>
          <Octicons name="home" size={24} color={colors.white} />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.headerImage} />
      </View>
      <View style={styles.mainProduct}>
        <Text style={styles.headerText}>Products</Text>
        <TouchableOpacity onPress={() => navigation.navigate('viewall', { data })}>
          <Text style={styles.seeAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.productP}>
          <FlatList
            data={selectedDatas}
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

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'white',
  },
  mainContainer: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 50,
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
    padding: 10,
    paddingHorizontal: 17,
    borderRadius: 99,
    backgroundColor: colors.white,
  },
  userIconText: {
    fontSize: 20,
    fontWeight: "600",
  },
  userName: {},
  userText: {
    fontSize: 15,
    color: colors.white,
  },
  userNameText: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.white,
  },
  imageContainer: {
    height: "21%",
    width: '100%',
  },
  headerImage: {
    height: '100%',
    width: '100%',
  },
  productP: {
    paddingBottom: 320,
    backgroundColor: '#f3f4f6',
  },
  mainProduct: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAll: {
    fontSize: 14,
    color: colors.primary,
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
  image: {
    height: 100,
    width: 100,
    borderRadius: 10, 
    // borderColor: colors.primary, 
    borderWidth: 2, 
    resizeMode: 'cover',
  },
  itemName: {
    marginTop: 8,
    fontSize: 12,
    fontWeight: '500',
  },
  itemPrice: {
    color: 'black',
    fontSize: 12,
  },
});

export default Home;