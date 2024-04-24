import React from 'react';
import { Image, StyleSheet, View, Text } from "react-native";

const Listing = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={require('../assets/img/controller.png')} style={styles.productImage} />
        <View style={styles.productInfo}>
          <Text style={styles.productName}>Wireless Dualsense Controller Playstation 5 Cosmic White</Text>
          <View style={styles.info}>
            <Text style={styles.price}>$60.00</Text>
            <Text style={styles.stock}>In Stock</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderColor: '#EFEFEF',
    borderWidth: 2,
    borderRadius: 12,
  },
  content: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    alignItems: 'center', 
  },
  productImage: {
    width: 80,
    height: 60,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#3AC430',
  },
  stock: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0139A6',
  }
});

export default Listing;
