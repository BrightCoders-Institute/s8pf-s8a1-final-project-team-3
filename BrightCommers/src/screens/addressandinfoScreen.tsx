import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const AddressandinfoScreen = () => {
    const [name, setNameText] = useState(""); //input for name and last name
    const [zip, setZipText] = useState(""); //input for zip code
    const [state, setStateText] = useState(""); //input for state
    const [city, setCityText] = useState(""); //input for city
    const [address, setAddressText] = useState(""); //input for address
    const [phone, setPhoneText] = useState(""); //input for phone number

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Name: </Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setNameText}
                placeholder="Enter your name"
            />
            <Text style={styles.title}>Zip: </Text>
            <TextInput 
                style={styles.input}
                value={zip}
                onChangeText={setZipText}
                placeholder="Enter your zip code"
            />
            <Text style={styles.title}>State: </Text>
            <TextInput 
                style={styles.input}
                value={state}
                onChangeText={setStateText}
                placeholder="Enter your state"
            />
            <Text style={styles.title}>City: </Text>
            <TextInput 
                style={styles.input}
                value={city}
                onChangeText={setCityText}
                placeholder="Enter your city"
            />
            <Text style={styles.title}>Address: </Text>
            <TextInput 
                style={styles.input}
                value={address}
                onChangeText={setAddressText}
                placeholder="Enter your address"
            />
            <Text style={styles.title}>Phone: </Text>
            <TextInput 
                style={styles.input}
                value={phone}
                onChangeText={setPhoneText}
                placeholder="Enter your phone number"
            />
            <Text style={styles.title}>It's your home or office?</Text>
            <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="#fff"
                text={"Home"}
                textStyle={styles.checkBoxText}
                iconStyle={styles.checkBoxRadius}
                innerIconStyle={styles.checkBoxRadius}
            />
            <BouncyCheckbox
                size={25}
                fillColor="blue"
                unfillColor="#fff"
                text={"Office"}
                textStyle={styles.checkBoxText}
                iconStyle={styles.checkBoxRadius}
                innerIconStyle={styles.checkBoxRadius}
            />
           <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#ffffff",
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    checkBoxRadius: {
        borderRadius: 0,
    },
    checkBoxText: {
        textDecorationLine: 'none',
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 45,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
      },
});

export default AddressandinfoScreen;
