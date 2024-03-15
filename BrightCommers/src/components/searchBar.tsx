
import React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import Glass from '../assets/icons/glass.svg';

const SearchBar = () => (
    <View style={styles.outerContainer}>
        <View style={styles.container}>
            <TextInput placeholder="Search Product" style={styles.input, styles.placeholder} />
            <TouchableOpacity style={{position: 'absolute', right: 16}}>
            <Glass/>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = {
    outerContainer: {
        padding: 12,
        backgroundColor: 'white',
    },
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'white',
      borderRadius: 8,
      paddingLeft: 12,
      paddingRight: 16,
      borderWidth: 2,
      borderColor: '#C4CDD6',
    },
    input: {
      flex: 1,
      marginLeft: 10,
      fontFamily: 'Inter',
      fontSize: 14,
      color: '#C4CDD6',
    },
    placeholder: {
      fontFamily: 'Inter',
      fontSize: 14,
      color: '#C4CDD6',
    },
  };

export default SearchBar;
