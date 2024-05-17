import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import auth from '@react-native-firebase/auth';
import { TextInput } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function ResetPasswordScreen() {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    const resetPassword = () => {
        if (!email.trim()) {
            Alert.alert('Please enter your email');
            return;
        }

        auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert('Email sent');
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.error(error);
                Alert.alert('Error sending reset email');
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.infoText}>
                    Please enter the email associated with your account.
                    Check your email to reset your password.
                </Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder='Email'
                keyboardType='email-address'
            />
            <TouchableOpacity style={styles.button} onPress={resetPassword}>
                <Text style={styles.buttonText}>Reset Password</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    infoText: {
        textAlign: 'justify',
        fontSize: 17,
        fontWeight: '700',
        marginBottom: 20,
    },
    input: {
        padding: 13,
        marginVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
    },
    button: {
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
