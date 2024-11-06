import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Linking,
} from "react-native";
import React, { useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import colors from "../Colors/Colors";

const Product = ({ route, navigation }) => {
  const { product } = route.params;

  useEffect(() => {
    console.log("data", product);
  });

  const openLink = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) =>
        console.error("An error occurred", err)
      );
    } else {
      console.error("Invalid URL:", url);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.share}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack("-1")}>
            <Ionicons name="arrow-back" size={28} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Product Details</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: product.detailimg }}
            style={styles.productImage}
          />
        </View>
        <View style={styles.specificationsContainer}>
          <Text style={styles.specificationsTitle}>PDP Tags</Text>
          <View style={styles.specifications}>
            <Text style={styles.tags}>{product.pdptags.tag1}</Text>
            <Text style={styles.tags}>{product.pdptags.tag2}</Text>
            <Text style={styles.tags}>{product.pdptags.tag3}</Text>
          </View>
          <View style={{ backgroundColor: colors.white, marginTop: -60 }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "500",
                marginBottom: 12,
                textAlign: "center",
                fontFamily: "outfit-bold",
              }}
            >
              Description
            </Text>
            <Text style={{ fontFamily: "outfit" }}>
              {product.productdesc.desc}
            </Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button1}
          onPress={() => {
            navigation.navigate("calculator");
          }}
        >
          <Text style={styles.buttonText1}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => openLink(product.productdoc)}
        >
          <Text style={styles.buttonText2}>Download PDF</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  share: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    paddingBottom: 9,
    backgroundColor: colors.primary,
    paddingTop: 12,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 23,
    marginLeft: 6,
    color: colors.white,
    fontFamily: "outfit-medium",
  },
  shareButton: {
    paddingTop: 8,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  productImage: {
    width: "100%",
    height: 310,
  },
  specificationsContainer: {
    paddingTop: 20,
    paddingHorizontal: 17,
    backgroundColor: colors.white,
  },
  specificationsTitle: {
    fontSize: 20,
    fontWeight: "500",
    marginBottom: 12,
    textAlign: "center",
    fontFamily: "outfit-bold",
  },
  tags: {
    backgroundColor: colors.lightGray,
    borderWidth: 1,
    borderColor: colors.gray,
    padding: 5,
    borderRadius: 50,
    fontFamily: "outfit",
    marginVertical: 3,
    paddingHorizontal: 7,
    color: colors.black,
    // margin:5
  },
  specifications: {
    // flexDirection: "row",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 5,
    display: "flex",
    paddingBottom: 85,
  },
  specificationLabel: {
    color: "gray",
    fontSize: 16,
    fontFamily: "outfit",
  },
  specificationValue: {
    fontSize: 16,
    fontFamily: "outfit",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    backgroundColor: colors.white,
    padding: 10,
    paddingHorizontal: 3,
    flexDirection: "row",
    gap: 12,
  },
  button1: {
    backgroundColor: colors.white,
    padding: 9,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 9999,
    width: "44%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
  },
  button2: {
    backgroundColor: colors.primary,
    padding: 9,
    borderRadius: 9999,
    width: "44%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 4,
  },
  buttonText1: {
    textAlign: "center",
    color: colors.primary,
    fontSize: 18,
  },
  buttonText2: {
    textAlign: "center",
    color: colors.white,
    fontSize: 18,
  },
});
