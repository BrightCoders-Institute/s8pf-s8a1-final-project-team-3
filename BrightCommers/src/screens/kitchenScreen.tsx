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

import {properties} from '../../Properties.json';
import Greeting from '../components/greeting';
import SearchBar from '../components/searchBar';
import firebase from '@react-native-firebase/firestore';

const SearchScreen = () => {
  const [products, setProducts] = useState<any>();

  useEffect(() => {
    firebase().collection('kitchen').get().then((query) => {
      const docs = query.docs;
      const data = docs.map((doc) => {
        return doc.data();
      })

      setProducts(data);
    })
  }, [])

  return (
    <>
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Greeting />
        <SearchBar />
        <View style={styles.row}>
          <Text style={styles.title}>Results</Text>
        </View>
        <FlatList 
        contentContainerStyle={styles.list}
        data={products} 
        renderItem={({item}) => (
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
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    columnGap: 20,
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
},
});

export default SearchScreen;
