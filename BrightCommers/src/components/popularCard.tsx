import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View, Text, Image, StyleSheet, FlatList } from 'react-native';
import firebase from '@react-native-firebase/firestore';

const ProductCard = ({ imageSource, title, price, item, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress(item)}>
      <View style={styles.card}>
        <View style={styles.contentContainer}>
          <Image source={imageSource} style={styles.image} />
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const ProductsList = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    firebase()
      .collection('popular')
      .get()
      .then((query) => {
        const docs = query.docs;
        const data = docs.map((doc) => {
          return { ...doc.data(), id: doc.id }; // Agrega un campo 'id' al objeto de datos
        });

        setProducts(data);
      });
  }, []);

  const navigation = useNavigation();

  const navigateTo = (screenName, item) => {
    navigation.navigate(screenName, { item }); // Pasa el objeto item como parámetro
  };

  return (
    <FlatList
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={products}
      renderItem={({ item }) => (
        <ProductCard
          onPress={() => navigateTo('ProductScreen', item)} // Pasa el objeto item al onPress
          imageSource={{ uri: item.img }}
          title={item.name}
          price={item.price}
          item={item} // Pasa el objeto item como prop al ProductCard
        />
      )}
    />
  );
};

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
