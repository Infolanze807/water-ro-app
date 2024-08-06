import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';

const Product = ({ route, navigation }) => {

  const { product } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack('-1')}>
          <Ionicons name="arrow-back" size={28} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Product Details</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
      <View style={styles.imageContainer}>
          <Image source={product.img} style={styles.productImage} />
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
              <Text style={styles.specificationValue}>{product.name}</Text>
              <Text style={styles.specificationValue}>{product.price}</Text>
              <Text style={styles.specificationValue}>90 L</Text>
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
        <TouchableOpacity style={styles.button2}>
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
    paddingTop: 35,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    paddingBottom: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: '600',
    fontSize: 23,
    marginLeft: 6,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 290,
  },
  specificationsContainer: {
    paddingTop: 20,
    paddingHorizontal: 17,
    backgroundColor: '#f3f4f6',
  },
  specificationsTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 12,
    textAlign: 'center',
  },
  specifications: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  specificationLabel: {
    color: 'gray',
    fontSize: 16,
  },
  specificationValue: {
    fontSize: 16,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: "center",
    backgroundColor: 'white',
    padding: 10,
    paddingHorizontal: 3,
    flexDirection: 'row',
    gap: 12,
  },
  button1: {
    backgroundColor: "white",
    padding: 9,
    borderColor: "#3034E9",
    borderWidth: 1,
    borderRadius: 9999,
    width: "44%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button2: {
    backgroundColor: "#3034E9",
    padding: 9,
    borderRadius: 9999,
    width: "44%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText1: {
    textAlign: 'center',
    color: '#3034E9',
    fontSize: 18,
  },
  buttonText2: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },
})
