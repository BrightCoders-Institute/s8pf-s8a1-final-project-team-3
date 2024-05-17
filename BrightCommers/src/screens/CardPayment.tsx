import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ActivityIndicator, FlatList, Alert, Image } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Add from '../assets/icons/add.svg';
import PaymentMethod from '../components/PaymentMethod';

const CardPayment = () => {
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) {
      setLoading(false);
      Alert.alert('Error', 'No user is logged in');
      return;
    }

    const unsubscribe = firestore()
      .collection('purchases')
      .where('userId', '==', user.uid)
      .onSnapshot(querySnapshot => {
        const userPurchases = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPurchases(userPurchases);
        setLoading(false);
      });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={purchases}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.purchaseItem}>
            <Text style={styles.purchaseText}>Total Items: {item.items.length}</Text>
            {item.items.map((product, index) => (
              <View key={index} style={styles.productItem}>
                <Image source={{ uri: product.img }} style={styles.productImage} />
                <View style={styles.productDetails}>
                  <Text style={styles.productText}>Name: {product.name.length > 25 ? product.name.slice(0, 55) + '...' : product.name}</Text>
                  <Text style={styles.productText}>Category: {product.category}</Text>
                  <Text style={styles.productText}>Price: {product.price}</Text>
                  <Text style={styles.productText}>Date: {product.addedAt.toDate().toLocaleDateString()}</Text>
                </View>
              </View>
            ))}
          </View>
        )}
        ListEmptyComponent={<Text>No purchases found.</Text>}
      />

      <TouchableOpacity style={styles.card}>
        <Add />
        <Text style={styles.cardText}>Add New Card</Text>
      </TouchableOpacity>

      <PaymentMethod />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  purchaseItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  purchaseText: {
    fontSize: 16,
    color: '#282828',
    marginBottom: 8,
  },
  productItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  productImage: {
    height: 100,
    width: 100,
    marginRight: 16,
  },
  productDetails: {
    flex: 1,
  },
  productText: {
    fontSize: 14,
    color: '#282828',
    marginBottom: 4,
  },
});

export default CardPayment;
