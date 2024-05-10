import React, { useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import firebase from '@react-native-firebase/firestore';

const ShoppingScreen = () => {


  const [Cart, setCart] = useState([])

  



  // const route = useRoute();
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   // Al cargar la pantalla, intenta cargar el carrito desde AsyncStorage
  //   retrieveCart();
  // }, []);

  // useEffect(() => {
  //   // Agregar producto al carrito si se recibe como parámetro
  //   if (route.params?.item) {
  //     addToCart(route.params.item);
  //   }
  // }, [route.params?.item]);

  // const retrieveCart = async () => {
  //   try {
  //     const cartFromStorage = await AsyncStorage.getItem('cart');
  //     if (cartFromStorage !== null) {
  //       // Si se encuentra el carrito en AsyncStorage, actualiza el estado del carrito
  //       setCart(JSON.parse(cartFromStorage));
  //     }
  //   } catch (error) {
  //     console.error('Error retrieving cart from AsyncStorage:', error);
  //   }
  // };

  // const addToCart = async (item) => {
  //   try {
  //     // Agrega el nuevo item al estado del carrito
  //     const newCart = [...cart, item];
  //     setCart(newCart);
  //     // Guarda el carrito actualizado en AsyncStorage
  //     await AsyncStorage.setItem('cart', JSON.stringify(newCart));
  //   } catch (error) {
  //     console.error('Error saving cart to AsyncStorage:', error);
  //   }
  // };

  return (
    <ScrollView>
      <View>
        {/* Renderiza la lista de productos del carrito */}
        {/* {cart.map((item, index) => (
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
        ))} */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
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
});

export default ShoppingScreen;
