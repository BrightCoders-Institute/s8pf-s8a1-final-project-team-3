import React, { useEffect, useState } from 'react';
import {
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  ImageBackground
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {properties} from '../../Properties.json';
import Greeting from '../components/greeting';
import SearchBar from '../components/searchBar';
import firebase from '@react-native-firebase/firestore';

const SearchScreen = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    firebase()
      .collection('home')
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
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <SearchBar />
        <View style={styles.row}>
          <Text style={styles.title}>Results</Text>
        </View>
        
       
        <FlatList 
        contentContainerStyle={styles.list}
        data={products} 
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigateTo('ProductScreen', item)}>
          <View style={styles.itemContainer}>
              <ImageBackground
                  source={{uri: item.img}}
                  resizeMode='contain'
                  style={styles.itemPhoto}
                  >
              </ImageBackground>
              <View style={styles.textConatiner}>
                  <Text style={styles.textConatiner}>{item.name}</Text>
                  <View style={styles.seconContainer}>
                    <Text style={styles.price}>{item.price}</Text>
                    <Text style={styles.shipping}>{item.shipping}</Text>
                  </View>
              </View>
          </View>
          </TouchableOpacity>
         )}/>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontFamily: 'Inter',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  action: {
    fontFamily: 'Inter',
    fontSize: 12,
    fontWeight: 'bold',
    color: '#0139A6',
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
},
itemContainer: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    alignItems: 'center',
    marginTop: 18,
    flexDirection: 'row',
    columnGap: 20,
    borderRadius: 12,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: '#EFEFEF',

},
itemPhoto: {
    height: 100,
    width: 100,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 12,
},
detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
},
textConatiner: {
  flex: 1,
  flexWrap: 'wrap',
  maxWidth: '100%',
},
titles: {
    fontSize: 21,
},
especifications: {
    fontWeight: 'bold',
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
rankingDecoration: {
    fontWeight: 'bold',
},
iconContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#FBEDB7',
    borderRadius: 10,
    marginBottom: 10,
    width: 60,
    height: 30,
    columnGap: 5,
},
seconContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: 4,
},
});

export default SearchScreen;
