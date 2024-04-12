import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import LeftArrow from '../assets/icons/left.svg';
import Add from '../assets/icons/add.svg';
import PaymentMethod from '../components/PaymentMethod';

const CardPayment = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <LeftArrow />
      <Text style={styles.title}>Mis tarjetas</Text>
    </View>

    <TouchableOpacity style={styles.card}>
        <Add />
        <Text style={styles.cardText}>Add New Card</Text>
    </TouchableOpacity>

    <PaymentMethod />

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
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#282828',
    paddingLeft: 12,
    marginBottom: 2,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#f5f5f5',
    borderWidth: 2,
  },
  cardText: {
    fontSize: 18,
    color: '#282828',
    paddingLeft: 8,
  },
});

export default CardPayment;
