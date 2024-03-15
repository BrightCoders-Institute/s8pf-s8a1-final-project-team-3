
import React from "react";
import { View, StatusBar, Text, TouchableOpacity, StyleSheet } from "react-native";
import Greeting from "../components/greeting";
import SearchBar from "../components/searchBar";

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <Greeting />
            <SearchBar />
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

export default Home;
