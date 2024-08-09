import { View, Text, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import img from '../../../assets/images/water-filters-glasses-water-ice.jpg';
import img1 from '../../../assets/images/strong-base-anion-isoporous-250x250.webp';
import img2 from '../../../assets/images//strong-acid-cation-resin-water-demineralization-softening-resin-250x250.webp';
import img3 from '../../../assets/images//mixed-bed-super-charge-resin-sdi-250x250.webp';
import img4 from '../../../assets/images/strong-cation-resin-csa-121-250x250.webp';
import img5 from '../../../assets/images/strong-base-anion-isoporous-250x250.webp';
import img6 from '../../../assets/images/resin-ion-exchange-250x250.webp';
import colors from '../../Components/Colors/Colors';
import Octicons from '@expo/vector-icons/Octicons';
import axios from 'axios';

const bucketSlug = 'demo';
const objectType = 'demos';
const cosmicReadKey = 'kbg7XWdgt2NPOACUqiTbzXKBYujO2rBK9oOoWPJIO7G603wgIy';
const apiUrl = `https://api.cosmicjs.com/v3/buckets/${bucketSlug}/objects`;

const Home = ({navigation}) => {
  // const data = [
  //   {
  //     id: "1",
  //     img: img1,
  //     name: "Demineralization Resin",
  //     price: "$10/KG"
  //   },
  //   {
  //     id: "2",
  //     img: img2,
  //     name: "Softening Resin",
  //     price: "$15/KG"
  //   },
  //   {
  //     id: "3",
  //     img: img3,
  //     name: "Iron Removal Resin",
  //     price: "$30/KG"
  //   },
  //   {
  //     id: "4",
  //     img: img4,
  //     name: "Ion Exchange Resin",
  //     price: "$50/KG"
  //   },
  //   {
  //     id: "5",
  //     img: img5,
  //     name: "Anion Resin",
  //     price: "$20/KG"
  //   },
  //   {
  //     id: "6",
  //     img: img6,
  //     name: "Cnc Wire Cut Edm",
  //     price: "$25/KG"
  //   },
  //   {
  //     id: "7",
  //     img: img4,
  //     name: "Ion Exchange Resin",
  //     price: "$50/KG"
  //   },
  //   {
  //     id: "8",
  //     img: img5,
  //     name: "Anion Resin",
  //     price: "$20/KG"
  //   },
  //   {
  //     id: "9",
  //     img: img6,
  //     name: "Cnc Wire Cut Edm",
  //     price: "$25/KG"
  //   },
  // ];

  // const limitedData = data.slice(0, 6);

  // const renderItem = ({ item }) => (
  //   <TouchableOpacity onPress={() => navigation.navigate('product', {product: item})} style={styles.itemContainer}>
  //     <Image source={item.img} style={styles.itemImage} />
  //     <Text style={styles.itemName}>{item.name}</Text>
  //     <Text style={styles.itemPrice}>{item.price}</Text>
  //   </TouchableOpacity>
  // );

  const [data, setData] = useState([]);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get(apiUrl, {
            params: {
              query: JSON.stringify({ type: objectType }),
              read_key: cosmicReadKey,
              depth: 2,
              props: 'slug,title,metadata',
            }
          });
  
          const datas = response.data.objects.map(data => ({
            id: data._id,
            title: data.title,
            img: data.metadata.img.url,
            doc: data.metadata.doc.url,
          }));
  
          setData(datas);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    const openLink = (url) => {
      Linking.openURL(url);
    };
  
    const renderItem = ({ item }) => (
      <TouchableOpacity onPress={() => navigation.navigate('product', { product: item })} style={styles.itemContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Image source={item.img} style={styles.image} />
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
        <TouchableOpacity onPress={()=> navigation.navigate('viewall', {data})}>
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
    backgroundColor: colors.white
  },
  userIconText: {
    fontSize: 20,
    fontWeight: "600",
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
    justifyContent: 'space-between'
  },
  seeAll: {
    fontSize: 14,
    color: colors.primary,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    // color: colors.gray,
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
    fontWeight: '500',
  },
  itemPrice: {
    color: 'black',
    fontSize: 12,
    // paddingBottom: 10,
  },
});
