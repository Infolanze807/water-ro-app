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
import FontAwesome from "@expo/vector-icons/FontAwesome";
import colors from "../Colors/Colors";

const Product = ({ route, navigation }) => {
  const { product } = route.params;

  useEffect(()=>{
    console.log("data",product);
    
  })

  const openLink = (url) => {
    if (url) {
      Linking.openURL(url).catch((err) => console.error("An error occurred", err));
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
        <TouchableOpacity style={styles.shareButton}>
          <FontAwesome name="share-square-o" size={20} color={colors.white} />
        </TouchableOpacity>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.imageContainer}>
          <Image source={{uri:product.detailimg}} style={styles.productImage} />
        </View>
        <View style={styles.specificationsContainer}>
          <Text style={styles.specificationsTitle}>Product Specifications</Text>
          <View style={styles.specifications}>
            <View>
              <Text style={styles.specificationLabel}>Product Name</Text>
              <Text style={styles.specificationLabel}>Price</Text>
              <Text style={styles.specificationLabel}>Tank Capacity</Text>
              <Text style={styles.specificationLabel}>Country of Origin</Text>
              <Text style={styles.specificationLabel}>Cooler Type</Text>
              <Text style={styles.specificationLabel}>Air throw coverage</Text>
              <Text style={styles.specificationLabel}>Brand</Text>
              <Text style={styles.specificationLabel}>Material</Text>
              <Text style={styles.specificationLabel}>Minimum Order</Text>
              <Text style={styles.specificationLabel}>Quantity</Text>
              <Text style={styles.specificationLabel}>Product Brochure</Text>
            </View>
            <View>
              <Text style={styles.specificationValue}>{product.title}</Text>
              <Text style={styles.specificationValue}>{product.productdesc.value.price}</Text>
              <Text style={styles.specificationValue}>{product.productdesc.value.cooler_type}</Text>
              <Text style={styles.specificationValue}>India</Text>
              <Text style={styles.specificationValue}>Desert</Text>
              <Text style={styles.specificationValue}>60 ft</Text>
              <Text style={styles.specificationValue}>Powerteck</Text>
              <Text style={styles.specificationValue}>ABS</Text>
              <Text style={styles.specificationValue}>10</Text>
              <Text style={styles.specificationValue}>20</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
              <Text style={styles.specificationValue}>PDF</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button1}>
          <Text style={styles.buttonText1}>Calculate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2}
          onPress={() => openLink(product.productdoc)}
        >
          <Text style={styles.buttonText2}>Download</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 42,
    backgroundColor: colors.primary,
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
    paddingHorizontal: 15,
    paddingBottom: 9,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 23,
    marginLeft: 6,
    color: colors.white,
    fontFamily:'outfit-medium'
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
    height: 290,
  },
  specificationsContainer: {
    paddingTop: 20,
    paddingHorizontal: 17,
    backgroundColor: colors.white,
  },
  specificationsTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
    textAlign: "center",
    fontFamily:'outfit'
  },
  specifications: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 20,
  },
  specificationLabel: {
    color: "gray",
    fontSize: 16,
    fontFamily:'outfit'
  },
  specificationValue: {
    fontSize: 16,
    fontFamily:'outfit'
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
