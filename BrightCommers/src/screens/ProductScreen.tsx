import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import LeftArrow from '../assets/icons/left.svg';
import Price from '../assets/icons/price.svg';
import Stock from '../assets/icons/stock.svg';
import Star from '../assets/icons/star.svg';
import Starfull from '../assets/icons/starfull.svg';

const ProductScreen = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <LeftArrow />
      <TouchableOpacity style={styles.addToCart}>
        <Text style={styles.addToCartText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
    <Text style={styles.title}>Wireless Dualsense Controller Playstation 5 Cosmic White.</Text>
    <View style={[styles.row, {marginTop: 12}]}>
        <Starfull style={{ marginRight:  6}}/>
        <Starfull style={{ marginRight:  6}}/>
        <Starfull style={{ marginRight:  6}}/>
        <Starfull style={{ marginRight:  6}}/>
        <Star style={{ marginRight:  6}}/>
        <Text style={{ fontSize: 16, color: '#7E7E7E' }}>(4.0)</Text>
    </View>
    <Image source={require('../assets/img/controller.png')} style={styles.image} />

    <View style={styles.row}>
        <View style={[styles.iconContainer, { backgroundColor: '#3AC430', marginRight: 8 }]}>
            <Price />
        </View>
        <View style={styles.textColumn}>
            <Text style={styles.textLabel}>Price</Text>
            <Text style={styles.priceText}>$60.00</Text>
        </View>
        <View style={{ flex: 1 }} />
        <View style={[styles.iconContainer, { backgroundColor: '#FA9A2E', marginLeft: 8 }]}>
            <Stock />
        </View>
        <View style={styles.textColumn}>
            <Text style={styles.textLabel}>In Stock</Text>
            <Text style={styles.priceText}>6</Text>
        </View>
    </View>


    <Text style={styles.description}>Siente la respuesta física a tus acciones en el juego con los accionadores dobles que reemplazan a los tradicionales motores de vibración. En tus manos, estas vibraciones dinámicas pueden simular la sensación de todo, desde los entornos hasta el retroceso de ...</Text>
    <View style={{ flex: 1 }} />
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Buy now</Text>
    </TouchableOpacity>
  </View>
);

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
