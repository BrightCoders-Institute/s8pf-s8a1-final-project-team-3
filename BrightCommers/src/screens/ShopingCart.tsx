import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LeftArrow from '../assets/icons/left.svg';
import Listing from '../components/listing';
import Receipt from '../components/receipt';

const ShoppingCart = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <LeftArrow />
      <Text style={styles.title}>Carrito de compras</Text>
    </View>
    <View style={styles.content}>
      <Listing style={styles.listing} />
      <View style={styles.listingSeparator} />
      <Listing style={styles.listing} />
    </View>
    <View style={styles.bottomSection}>
      <View style={styles.bottomContent}>
        <Receipt style={styles.receipt} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    alignItems: 'center',
    marginBottom: 28,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#282828',
    paddingLeft: 12,
    marginBottom: 2,
  },
  content: {
    flex: 1,
  },
  bottomSection: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
    alignItems: 'center',
  },
  bottomContent: {
    width: '100%', // Ensure content takes full width
    alignItems: 'center',
  },
  button: {
    width: '100%', // Button width set to take full width
    backgroundColor: '#F1EDFC',
    borderRadius: 8,
    padding: 12,
    marginTop: 36, // Adjusted margin top instead of marginBottom
    alignItems: 'center',
    borderColor: '#8B88FB',
    borderWidth: 2,
  },
  buttonText: {
    color: '#8B88FB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  listing: {
    marginTop: 28,
  },
  listingSeparator: {
    marginTop: 18,
  },
  receipt: {
    marginBottom: 36, 
  },
});

export default ShoppingCart;
