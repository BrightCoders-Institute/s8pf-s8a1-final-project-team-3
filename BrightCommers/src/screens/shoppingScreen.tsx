import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ImageBackground, StyleSheet, Button, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

const ShoppingScreen = () => {
  const route = useRoute();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Al cargar la pantalla, intenta cargar los elementos del carrito desde Firebase Firestore
    retrieveCartItems();
  }, []);

  useEffect(() => {
    // Agregar producto al carrito si se recibe como parámetro
    if (route.params?.item) {
      addToCart(route.params.item);
    }
  }, [route.params?.item]);

  const retrieveCartItems = async () => {
    try {
      const cartItemsSnapshot = await firestore().collection('cart_items').get();
      const items = cartItemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCartItems(items);
    } catch (error) {
      console.error('Error retrieving cart items from Firestore:', error);
    }
  };

  const addToCart = async (item) => {
    try {
      // Agrega el nuevo item al carrito en Firestore
      await firestore().collection('cart_items').add(item);
      // Actualiza la lista de elementos del carrito
      retrieveCartItems();
    } catch (error) {
      console.error('Error adding item to cart in Firestore:', error);
    }
  };

  const handlePurchase = () => {
    console.log('Comprar button pressed');
    // Lógica para manejar la compra
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <View>
          {/* Renderiza la lista de productos del carrito */}
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
                  <Text style={styles.shipping}>Free Shipping</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Comprar" onPress={handlePurchase} />
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
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 0.1,
  },
  itemPhoto: {
    height: 100,
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  titles: {
    fontSize: 16,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 23,
    color: '#3ac430',
  },
  shipping: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#0139a6',
  },
  secondContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
});

export default ShoppingScreen;
