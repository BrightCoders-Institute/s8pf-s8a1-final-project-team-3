

import React from 'react';
import { View, ScrollView, StatusBar, Text, TouchableOpacity, StyleSheet } from "react-native";
import Greeting from "../components/greeting";
import SearchBar from "../components/searchBar";
import Categories from "../components/categories";
import PopularCard from "../components/popularCard";
import Discounts from '../components/discounts';

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Greeting />
            <SearchBar />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.row}>
                    <Text style={styles.title}>
                        Categories
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.action}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <Categories />
                <View style={styles.row}>
                    <Text style={styles.title}>
                        Popular
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.action}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <PopularCard />
                <View style={styles.row}>
                    <Text style={styles.title}>
                        Discounts
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.action}>
                            See All
                        </Text>
                    </TouchableOpacity>
                </View>
                <Discounts />
            </ScrollView>
        </View>
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
        fontFamily: "Inter",
        fontSize: 24,
        fontWeight: "bold",
        color: "#000000",
    },
    action: {
        fontFamily: "Inter",
        fontSize: 12,
        fontWeight: "bold",
        color: "#0139A6",
    }
});

export default HomeScreen;
