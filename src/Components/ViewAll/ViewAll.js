import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../Colors/Colors";

const ViewAll = ({ route, navigation }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={28} color={colors.white} />
        </TouchableOpacity>
        <Text style={styles.product}>Products</Text>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          showsVerticalScrollIndicator= {false} // Use a unique key for each item
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("product", { product: item })
              }
              style={styles.itemContainer}
            >
              <Image
                source={{ uri: item.detailimg }}
                style={styles.image}
              />
              <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.subtitle}>{item.productdesc.title2}</Text>
                <Text style={styles.description}>{item.productdesc.desc}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default ViewAll;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    paddingTop:40

  },
  product: {
    color: colors.white,
    fontFamily: "outfit",
    fontSize: 24,
    marginLeft: 10,
  },
  listContainer: {
    backgroundColor: colors.white,
    // paddingHorizontal: 10,
    padding:15
  },
  itemContainer: {
    padding: 10,
    backgroundColor: colors.lightGray,
    borderRadius: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    height: 110,
    width: 130,
    flex: 0.4,
  },
  textContainer: {
    flex: 0.6,
    paddingLeft: 10,
  },
  title: {
    fontSize: 17,
    fontFamily: "outfit",
  },
  subtitle: {
    fontSize: 13,
    color: colors.black,
    fontFamily: "outfit",
  },
  description: {
    fontSize: 9.8,
    color: colors.gray,
    fontFamily: "outfit",
  },
});
