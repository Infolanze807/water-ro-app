import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  BackHandler,
  Alert
} from "react-native";
import React, { useEffect, useState } from "react";
import img from "../../../assets/images/BANNER.jpg";
import colors from "../../Components/Colors/Colors";
import axios from "axios";
import logo from "../../../assets/images/logomain2.png";
import { OBJECT_TYPE, COSMIC_READKEY, APIURL } from "@env";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user1, setUser] = useState("");

  const getAuthData = async () => {
    const storedAuthData = await AsyncStorage.getItem('userName');
    if (storedAuthData) {
      setUser(storedAuthData);
    } else {
      setUser("");
    }
  };

 useFocusEffect(
     React.useCallback(() => {
       getAuthData();
     }, [])
   );

  const selectedDatas = data.slice(0, 6);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(APIURL, {
          params: {
            query: JSON.stringify({ type: OBJECT_TYPE }),
            read_key: COSMIC_READKEY,
            depth: 2,
            props: "slug,title,metadata",
          },
        });

        const datas = response.data.objects.map((data) => ({
          title: data.title,
          detailimg: data.metadata.detail_img.url,
          productdoc: data.metadata.product_doc.url,
          productdesc: data.metadata.product_desc,
          pdptags: data.metadata.product_desc.PDPTags,
        }));

        setData(datas);
      } catch (error) {
        console.error("Error fetching data:", error);
      }finally {
        setLoading(false); 
      }
    };

    fetchData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      const backAction = () => {
        Alert.alert("Hold on!", "Do you want to exit the app?", [
          { text: "Cancel", onPress: () => null, style: "cancel" },
          { text: "YES", onPress: () => BackHandler.exitApp() },
        ]);
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }, [])
  );

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("product", { product: item })}
        style={styles.itemContainer}
      >
        <Image source={{ uri: item.detailimg }} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.title2}>{item.productdesc?.title2}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView
      style={{ backgroundColor: colors.white }}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.headerContainer}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.companyText}>{user1 || "User"}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image
            source={logo}
            style={{
              height: 23,
              width: 120,
              backgroundColor: "white",
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

      <View style={styles.flatListContainer}>
  {loading ? (
    <ActivityIndicator size="large" color={colors.primary} />
  ) : (
    <FlatList
      data={selectedDatas}
      numColumns={2}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollEnabled={false}
      contentContainerStyle={styles.flatListContent}
    />
  )}
</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingVertical: 30,
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
    paddingVertical: 10,
    borderRadius: 15,
  },
  imageContainer: {
    paddingTop: 20,
    padding: 10,
    height: 230,
    width: "100%",
  },
  headerImage: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  mainProduct: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
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
  flatListContainer: {
    backgroundColor: colors.lightGray,
    paddingBottom: 20,
  },
  flatListContent: {
    alignItems: "center",
  },
  itemContainer: {
    width: 150,
    height: 220,
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
    height: 110,
    width: 135,
    resizeMode: "cover",
  },
  title: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "600",
    fontFamily: "outfit",
    textAlign: "center",
  },
  title2: {
    marginTop: 8,
    fontSize: 11,
    fontWeight: "600",
    fontFamily: "outfit",
    textAlign: "center",
  },
});

export default Home;
