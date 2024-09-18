// import { View, Text, Image, FlatList, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import img from '../../../assets/images/water-filters-glasses-water-ice.jpg';
// import colors from '../../Components/Colors/Colors';
// import Octicons from '@expo/vector-icons/Octicons';
// import axios from 'axios';

// const bucketSlug = 'dashboard-production';
// const objectType = 'products';
// const cosmicReadKey = 'ccoIwYVf1HWujfu3nTptWHrCq8qidSApj6XJ0pyOJfjVDBDzWp';
// const apiUrl = `https://api.cosmicjs.com/v3/buckets/${bucketSlug}/objects`;

// const Home = ({ navigation }) => {
//   const [data, setData] = useState([]);

//   const selectedDatas = data.slice(0, 6);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(apiUrl, {
//           params: {
//             query: JSON.stringify({ type: objectType }),
//             read_key: cosmicReadKey,
//             depth: 2,
//             props: 'slug,title,metadata',
//           },
//         });

//         const datas = response.data.objects.map(data => ({
//           id: data._id,
//           title: data.title,
//           coverimg: data.metadata.cover_img.url,
//           detailimg: data.metadata.detail_img.url,
//           productdoc: data.metadata.product_doc.url,
//         }));
//         console.log(datas);

//         setData(datas);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   const renderItem = ({ item }) => (
//     <TouchableOpacity onPress={() => navigation.navigate('product', { product: item })} style={styles.itemContainer}>
//       <Image source={{ uri: item.coverimg }} style={styles.image} />
//       <Text style={styles.title}>{item.title}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={{backgroundColor:colors.white}}>
//       <View style={styles.headerContainer}>
//         <View style={styles.welcomeContainer}>
//           <Text style={styles.welcomeText}>Welcome</Text>
//           <Text style={styles.companyText}>Infolanze Tech</Text>
//         </View>
//         <View style={styles.iconContainer}>
//           <Octicons name="home" size={28} color={colors.primary} />
//         </View>
//       </View>
//       <View style={styles.imageContainer}>
//         <Image source={img} style={styles.headerImage} />
//       </View>
//       <View style={styles.mainProduct}>
//         <Text style={styles.headerText}>Products</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('viewall', { data })}>
//           <Text style={styles.seeAll}>View All</Text>
//         </TouchableOpacity>
//       </View>
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//         <View style={styles.productP}>
//           <FlatList
//             data={selectedDatas}
//             numColumns={2}
//             renderItem={renderItem}
//             keyExtractor={item => item.id}
//             showsVerticalScrollIndicator={false}
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.flatListContent}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: 'white',
//   },
//   headerContainer: {
//     backgroundColor: colors.white,
//     paddingHorizontal: 20,
//     paddingVertical: 35,
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomRightRadius: 25,
//     borderBottomLeftRadius: 25,
//     elevation: 5,
//   },
//   welcomeContainer: {
//     flexDirection: 'column',
//   },
//   welcomeText: {
//     fontSize: 18,
//     color: colors.primary,
//     fontWeight: '500',
//   },
//   companyText: {
//     fontSize: 22,
//     fontWeight: '700',
//     color: colors.secondary,
//   },
//   iconContainer: {
//     backgroundColor: colors.lightGray,
//     padding: 10,
//     borderRadius: 15,
//   },
//   imageContainer: {
//     paddingTop:20,
//     padding:10,

//     // paddingBottom:20,
//     height: "21%",
//     width: '100%',
//   },
//   headerImage: {
//     height: '100%',
//     width: '100%',
//     borderRadius:10
//   },
//   productP: {
//     paddingBottom: 320,
//     backgroundColor: '#f3f4f6',
//   },
//   mainProduct: {
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingVertical: 10,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   seeAll: {
//     fontSize: 14,
//     color: colors.primary,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: '600',
//   },
//   flatListContent: {
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   itemContainer: {
//     width: 150,
//     height: 190,
//     padding: 8,
//     borderColor: '#d1d5db',
//     backgroundColor: 'white',
//     borderRadius: 6,
//     margin: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.8,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   image: {
//     height: 100,
//     width: 100,
//     borderRadius: 10,
//     borderWidth: 2,
//     resizeMode: 'cover',
//   },
//   itemName: {
//     marginTop: 8,
//     fontSize: 12,
//     fontWeight: '500',
//   },
//   itemPrice: {
//     color: 'black',
//     fontSize: 12,
//   },
// });

// export default Home;

import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import img from "../../../assets/images/water-filters-glasses-water-ice.jpg";
import colors from "../../Components/Colors/Colors";
import Octicons from "@expo/vector-icons/Octicons";
import axios from "axios";
import logo from "../../../assets/images/Vanilla.png";

const bucketSlug = "dashboard-production";
const objectType = "products";
const cosmicReadKey = "ccoIwYVf1HWujfu3nTptWHrCq8qidSApj6XJ0pyOJfjVDBDzWp";
const apiUrl = `https://api.cosmicjs.com/v3/buckets/${bucketSlug}/objects`;

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  const selectedDatas = data.slice(0, 6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl, {
          params: {
            query: JSON.stringify({ type: objectType }),
            read_key: cosmicReadKey,
            depth: 2,
            props: "slug,title,metadata",
          },
        });

        const datas = response.data.objects.map((data) => ({
          // id: data._id,
          title: data.title,
          coverimg: data.metadata.cover_img.url,
          detailimg: data.metadata.detail_img.url,
          productdoc: data.metadata.product_doc.url,
          productdesc: data.metadata.product_desc, // Added productdesc here
        }));
        console.log(datas);

        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("product", { product: item })}
      style={styles.itemContainer}
    >
      <Image source={{ uri: item.coverimg }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ backgroundColor: colors.white }}>
      <View style={styles.headerContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.companyText}>Infolanze Tech</Text>
        </View>
        <View style={styles.iconContainer}>
          {/* <Octicons name="home" size={28} color={colors.primary} /> */}
          <Image
            source={logo}
            style={{
              height: 70,
              width: 70,
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: colors.gray,
              borderRadius: 99,
            }}
          />
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={img} style={styles.headerImage} />
      </View>
      <View style={styles.mainProduct}>
        <Text style={styles.headerText}>Products</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("viewall", { data })}
        >
          <Text style={styles.seeAll}>View All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.productP}>
          <FlatList
            data={selectedDatas}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
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
    backgroundColor: "white",
  },
  headerContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 35,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
    elevation: 5,
  },
  welcomeContainer: {
    flexDirection: "column",
  },
  welcomeText: {
    fontSize: 18,
    color: colors.primary,
    fontWeight: "500",
    fontFamily: "outfit",
  },
  companyText: {
    fontSize: 22,
    color: colors.secondary,
    fontFamily: "outfit-bold",
  },
  iconContainer: {
    // backgroundColor: colors.lightGray,
    // padding: 10,
    paddingVertical: 10,
    borderRadius: 15,
  },
  imageContainer: {
    paddingTop: 20,
    padding: 10,
    height: "21%",
    width: "100%",
  },
  headerImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  productP: {
    paddingBottom: 320,
    backgroundColor: "#f3f4f6",
  },
  mainProduct: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  seeAll: {
    fontSize: 14,
    color: colors.primary,
    fontFamily: "outfit",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
    fontFamily: "outfit-medium",
  },
  flatListContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  itemContainer: {
    width: 150,
    height: 220, // Adjusted height to fit description
    padding: 8,
    borderColor: "#d1d5db",
    backgroundColor: "white",
    borderRadius: 6,
    margin: 12,
    justifyContent: "center",
    alignItems: "center",
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
    borderWidth: 2,
    resizeMode: "cover",
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "outfit",
  },
  productDesc: {
    marginTop: 4,
    fontSize: 12,
    color: "#4B5563", // Grey color for description text
    textAlign: "center",
  },
});

export default Home;
