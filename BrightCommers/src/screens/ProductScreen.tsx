import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LeftArrow from '../assets/icons/left.svg';
import Price from '../assets/icons/price.svg';
import Stock from '../assets/icons/stock.svg';
import Star from '../assets/icons/star.svg';
import Starfull from '../assets/icons/starfull.svg';

const ProductScreen = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.addToCart}>
          <Text style={styles.addToCartText}>Add to cart</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{item.name}</Text>
      <View style={styles.row}>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={{ marginRight: 6 }}>
            {index < Math.floor(item.rating) ? <Starfull /> : <Star />}
          </View>
        ))}
        <Text style={{ fontSize: 16, color: '#7E7E7E' }}>({item.rating})</Text>
      </View>
      <Image source={{ uri: item.img }} style={styles.image} />

      <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#3AC430', marginRight: 8 }]}>
          <Price />
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.textLabel}>Price</Text>
          <Text style={styles.priceText}>{item.price}</Text>
        </View>
        <View style={{ flex: 1 }} />
        <View style={[styles.iconContainer, { backgroundColor: '#FA9A2E', marginLeft: 8 }]}>
          <Stock />
        </View>
        <View style={styles.textColumn}>
          <Text style={styles.textLabel}>In Stock</Text>
          <Text style={styles.priceText}>{item.stock}</Text>
        </View>
      </View>

      <Text style={styles.description}>{item.description}</Text>
      <View style={{ flex: 1 }} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Buy now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  image: {
    marginTop: 48,
    marginBottom: 32,
    width: '100%',
    height: 200,
    resizeMode: 'contain',
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    color: '#282828',
  },
  description: {
    fontSize: 14,
    color: '#7E7E7E',
    marginTop: 16,
  },
  price: {
    fontSize: 24,
    color: '#000',
    fontWeight: 'bold',
    marginTop: 8,
  },
  button: {
    backgroundColor: '#F1EDFC',
    borderRadius: 8,
    padding: 12,
    marginTop: 18,
    alignItems: 'center',
    borderColor: '#8B88FB',
    borderWidth: 2,
  },
  buttonText: {
    color: '#8B88FB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCart: {
    backgroundColor: '#E8F1FF',
    borderRadius: 8,
    borderColor: '#005EFE',
    borderWidth: 2,
    paddingVertical: 4,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  addToCartText: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#005EFE',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    marginRight: 16,
  },
  textColumn: {
    flexDirection: 'column',
  },
  textLabel: {
    fontFamily: 'Inter',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7E7E7E',
  },
  priceText: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#282828',
  },
});

export default ProductScreen;
