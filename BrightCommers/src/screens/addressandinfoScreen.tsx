import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const AddressandinfoScreen = () => {
    const [name, setNameText] = useState(""); //input for name and last name
    const [zip, setZipText] = useState(""); //input for zip code
    const [state, setStateText] = useState(""); //input for state
    const [city, setCityText] = useState(""); //input for city
    const [address, setAddressText] = useState(""); //input for address
    const [phone, setPhoneText] = useState(""); //input for phone number

    return (
        <View style={styles.container}>
            <Text>Name: </Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setNameText}
                placeholder="Enter your name"
            />
            <Text>Zip: </Text>
            <TextInput 
                style={styles.input}
                value={zip}
                onChangeText={setZipText}
                placeholder="Enter your zip code"
            />
            <Text>State: </Text>
            <TextInput 
                style={styles.input}
                value={state}
                onChangeText={setStateText}
                placeholder="Enter your state"
            />
            <Text>City: </Text>
            <TextInput 
                style={styles.input}
                value={city}
                onChangeText={setCityText}
                placeholder="Enter your city"
            />
            <Text>Address: </Text>
            <TextInput 
                style={styles.input}
                value={address}
                onChangeText={setAddressText}
                placeholder="Enter your address"
            />
            <Text>Phone: </Text>
            <TextInput 
                style={styles.input}
                value={phone}
                onChangeText={setPhoneText}
                placeholder="Enter your phone number"
            />
            <BouncyCheckbox
                size={25}
                fillColor="#5f6def"
                unfillColor="#fff"
                text={"Home"}
                textStyle={styles.checkBoxText}
                iconStyle={styles.checkBoxRadius}
                innerIconStyle={styles.checkBoxRadius}
                />
            <Button
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        margin: 16,
    },
    termsContainer: {
        flexDirection: 'row',
        },
        checkBoxRadius: {
        borderRadius: 0,
        },
        checkBoxText: {
        textDecorationLine: 'none',
        },
        text: {
        color: 'red',
        },
});

export default AddressandinfoScreen;
