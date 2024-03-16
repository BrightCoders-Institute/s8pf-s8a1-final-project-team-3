import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const ProductCard = ({ imageSource, title, price }) => (
  <View style={styles.card}>
    <View style={styles.contentContainer}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  </View>
);

const ProductsList = () => (
  <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <ProductCard 
      imageSource={require('../assets/img/controller.png')}
      title="Wireless Dualsense control Playstation 5 White"
      price="$60.00"
    />
    <ProductCard 
      imageSource={require('../assets/img/controller.png')}
      title="Wireless Dualsense control Playstation 5 White"
      price="$60.00"
    />
  </ScrollView>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderWidth: 2,
    width: 247,
    height: 283,
    marginHorizontal: 16,
    marginLeft: 16, 
    marginTop: 18,
    marginBottom: 2,
  },
  contentContainer: {
    alignItems: 'flex-start',
  },
  image: {
    width: 196,
    height: 151,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 8,
  },
  price: {
    fontFamily: 'Inter',
    fontSize: 20,
    color: '#3AC430',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default ProductsList;
