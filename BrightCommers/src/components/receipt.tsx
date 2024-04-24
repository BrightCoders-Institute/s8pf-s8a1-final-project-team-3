import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const horizontalPadding = 16; // Assuming horizontal padding is 16

const Receipt = () => {
  const receiptWidth = screenWidth - 2 * horizontalPadding;

  return (
    <View style={[styles.container, { width: receiptWidth }]}>
      <View style={[styles.itemRow, { marginBottom: 24 }]}>
        <Text style={styles.amount}>Subtotal:</Text>
        <Text style={styles.label}>$00.00</Text>
      </View>
      <View style={styles.itemRow}>
        <Text style={styles.amount}>Envío:</Text>
        <Text style={styles.label}>$00.00</Text>
      </View>
      <View style={styles.totalRow}>
        <Text style={styles.label}>Total:</Text>
        <Text style={styles.totalAmount}>$00.00</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
    paddingHorizontal: horizontalPadding,
    paddingVertical: 16,
    borderRadius: 8,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#282828',
  },
  amount: {
    fontSize: 16,
    color: '#515151',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingTop: 16,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#282828',
  },
});

export default Receipt;

