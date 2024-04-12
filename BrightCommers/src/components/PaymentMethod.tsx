import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Dots from '../assets/icons/dots.svg';
import Mastercard from '../assets/icons/mastercard.svg';
import SelectedPayment from '../assets/icons/SelectedPayment.svg';

const PaymentMethod = () => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected); 
  };

  return (
    <TouchableOpacity
      style={[styles.card, isSelected && styles.cardSelected]} 
      onPress={handlePress}
    >
        <View>
            <Text style={styles.cardTitle}>Mastercard</Text>
            <View style={styles.cardInfo}>
                <Mastercard style={{ marginRight: 24 }} />
                <Dots style={{ marginRight: 8 }} />
                <Text style={styles.text}>1111</Text>
            </View>
        </View>
        {isSelected && <SelectedPayment />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#f5f5f5',
    borderWidth: 2, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardSelected: { 
    borderColor: '#FA9A2E', 
    borderWidth: 2,
  },
  cardTitle: {
    fontSize: 18,
    color: '#282828',
    paddingLeft: 8,
    fontWeight: 'bold',
  },
  cardInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
    marginLeft: 8,
  },
  text: {
    fontSize: 16,
    color: '#282828',
    fontWeight: 'bold',
  },
});

export default PaymentMethod;
