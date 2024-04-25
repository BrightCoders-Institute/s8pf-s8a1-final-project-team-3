import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text, Image, StyleSheet, ScrollView, StatusBar, FlatList, ImageBackground} from 'react-native';
import firebase from '@react-native-firebase/firestore';
  


const ProductCard = ({imageSource, title, price, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} >
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        <Image source={imageSource} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  </TouchableOpacity>
  )
}


const ProductsList = () => {

  const [productsKitchen, setProductsKitchen] = useState<any>();
  useEffect(() => {
    firebase().collection('popular').get().then((query) => {
      const docs = query.docs;
      const data = docs.map((doc) => {
        return doc.data();
      })

      setProductsKitchen(data);
    })
  }, [])



  const navigation = useNavigation(); // Usa useNavigation para obtener el objeto de navegación

  const navigateTo = (screenName) => {
    navigation.navigate(screenName);
  }

  return (
  <FlatList
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    data= {productsKitchen}
    renderItem={({ item }) => (
      <ProductCard
        onPress={() => navigateTo('ProductScreen')}
        imageSource={{uri: item.img}}
        title={item.name}
        price={item.price}
      />
    )}
  />
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    alignItems: 'center',
    borderColor: '#EFEFEF',
    borderWidth: 2,
    width: 250,
    height: 290,
    marginHorizontal: 16,
    marginLeft: 16,
    marginTop: 18,
    marginBottom: 2,
  },
  contentContainer: {
    alignItems: 'flex-start',
  },
  image: {
    width: 196,
    height: 151,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 16,
    textAlign: 'left',
    marginBottom: 8,
  },
  price: {
    fontFamily: 'Inter',
    fontSize: 20,
    color: '#3AC430',
    fontWeight: 'bold',
    textAlign: 'left',
  },
});

export default ProductsList;
