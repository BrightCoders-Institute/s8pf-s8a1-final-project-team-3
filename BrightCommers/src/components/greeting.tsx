import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Gear from '../assets/icons/gear.svg';
import Bell from '../assets/icons/bell.svg';
import Cart from '../assets/icons/shopping-cart.svg';

const Greeting = () => {
    const navigation = useNavigation(); // Mueve esta línea dentro del componente funcional

    const navigateTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/pfp.png')} style={styles.avatar}/>
            <View style={styles.textContainer}>
                <Text style={styles.greetingSmall}>Hello</Text> 
                <Text style={styles.greetingBig}>Carlos!</Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity>
                    <Gear style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Bell style={styles.icon}/>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigateTo('ShoppingScreen')}>
                    <Cart style={styles.icon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 12,
    },
    avatar: {
        width: 42,
        height: 42,
        borderRadius: 21,
        marginRight: 10,
    },
    greetingSmall: {
        fontFamily: 'Inter',
        fontSize: 14,
        color: '#282828',
    },
    greetingBig: {
        fontFamily: 'Inter',
        fontSize: 16,
        color: '#282828',
        fontWeight: 'bold',
    },
    textContainer: {
        marginLeft: 3,
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
    },
    icon: {
        width: 24,
        height: 24,
        marginLeft: 16,
    }
});

export default Greeting;
