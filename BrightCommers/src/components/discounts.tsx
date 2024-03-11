import React from 'react';
import { Image, StyleSheet, View } from "react-native";

const Discounts = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img/discounts.png')} style={styles.image} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 16,
    },
    image: {
        flex: 1,
        width: undefined,
        height: undefined,
        aspectRatio: 336 / 172,
        resizeMode: 'contain',
    },
});

export default Discounts;
