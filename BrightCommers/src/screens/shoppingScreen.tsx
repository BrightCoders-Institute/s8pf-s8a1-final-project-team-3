import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, Button, SafeAreaView, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ShoppingScreen = () => {
  const route = useRoute();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState(false);

  useEffect(() => {
    const user = auth().currentUser;
    if (!user) {
      setLoading(false);
      Alert.alert('Error', 'No user is logged in');
      return;
    }

    const unsubscribe = firestore().collection('cart_items')
      .where('userId', '==', user.uid)
      .onSnapshot(
        snapshot => {
          const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setCartItems(items);
          setLoading(false);
        },
        error => {
          console.error('Error retrieving cart items from Firestore:', error);
          setLoading(false);
        }
      );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (route.params?.item) {
      addToCart(route.params.item);
    }
  }, [route.params?.item]);

  const addToCart = async (item) => {
    try {
      const user = auth().currentUser;
      if (!user) {
        Alert.alert('Error', 'No user is logged in');
        return;
      }
  
      const itemWithUserId = { ...item, userId: user.uid, addedAt: firestore.FieldValue.serverTimestamp() }; // Agrega la fecha al ítem
      const itemRef = firestore().collection('cart_items').doc(item.id);
      await itemRef.set(itemWithUserId);
      console.log('Item added to cart:', itemWithUserId);
    } catch (error) {
      console.error('Error adding item to cart in Firestore:', error);
    }
  };

  const handlePurchase = async () => {
    setPurchasing(true);
    const user = auth().currentUser;
    if (!user) {
      Alert.alert('Error', 'No user is logged in');
      setPurchasing(false);
      return;
    }

    try {
      const purchasesRef = firestore().collection('purchases').doc(user.uid);
      const purchasesDoc = await purchasesRef.get();
      const newPurchase = {
        items: cartItems,
        purchasedAt: firestore.FieldValue.serverTimestamp()
      };

      if (purchasesDoc.exists) {
        await purchasesRef.update({
          items: firestore.FieldValue.arrayUnion(...cartItems),
          lastUpdated: firestore.FieldValue.serverTimestamp()
        });
      } else {
        await purchasesRef.set({
          userId: user.uid,
          items: cartItems,
          createdAt: firestore.FieldValue.serverTimestamp()
        });
      }

      const batch = firestore().batch();
      cartItems.forEach(item => {
        const docRef = firestore().collection('cart_items').doc(item.id);
        batch.delete(docRef);
      });
      await batch.commit();

      setCartItems([]);
      Alert.alert('Success', 'Purchase successful');
    } catch (error) {
      console.error('Error processing purchase:', error);
      Alert.alert('Error', 'There was an issue processing your purchase');
    } finally {
      setPurchasing(false);
    }
  };

  const handleRemoveItem = async (itemId) => {
    try {
      console.log('Removing item with ID:', itemId);
      const docRef = firestore().collection('cart_items').doc(itemId);
      await docRef.delete();
      setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
      console.log('Item removed from Firestore and state:', itemId);
      Alert.alert('Success', 'Item removed from cart');
    } catch (error) {
      console.error('Error removing item from cart in Firestore:', error);
      Alert.alert('Error', 'There was an issue removing the item from your cart');
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View>
          {cartItems.map((item, index) => (
            <View key={index} style={styles.itemContainer}>
              <ImageBackground
                source={{ uri: item.img }}
                resizeMode='contain'
                style={styles.itemPhoto}
              />
              <View style={styles.textContainer}>
                <Text style={styles.titles}>{item.name}</Text>
                <View style={styles.secondContainer}>
                  <Text style={styles.price}>{item.price}</Text>
                  <View style={styles.shippingContainer}>
                    <Text style={styles.shipping}>Free Shipping</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveItem(item.id)}
              >
                <Text style={styles.removeButtonText}>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.summaryContainer}>
        <Text style={styles.totalText}>Total: $ {cartItems.reduce((total, item) => total + parseFloat(item.R_price), 0).toFixed(2)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Comprar" onPress={handlePurchase} disabled={purchasing} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  itemContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth: 0.1,
    alignItems: 'center',
  },
  itemPhoto: {
    height: 100,
    width: 100,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titles: {
    fontSize: 16,
    marginBottom: 5,
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  price: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#3ac430',
    marginRight: 10,
  },
  shippingContainer: {
    marginLeft: 10,
  },
  shipping: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#0139a6',
  },
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 5,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  summaryContainer: {
    padding: 10,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ShoppingScreen;
