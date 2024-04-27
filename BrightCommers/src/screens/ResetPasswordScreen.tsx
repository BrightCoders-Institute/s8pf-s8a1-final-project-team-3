import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import auth from '@react-native-firebase/auth'
import { TextInput } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native';

export default function ResetPasswordScreen() {
    const navigation = useNavigation()
    const [email, setEmail] = useState('')

    const ResetPassword = () => {
        if (email === ''){
            console.log('Please enter your email')
            Alert.alert('Porfavor ingrese su correo')
            return
        } else {
            auth().sendPasswordResetEmail(email)
            .then(() => {
                console.log("Email sent")
                Alert.alert("Email Enviado")
                // Después de enviar el correo de restablecimiento, navegar de vuelta a la pantalla de inicio de sesión
                navigation.navigate('Login')
            })
            .catch((error) => {
                console.log(error)
                Alert.alert('Error al enviar el correo de restablecimiento')
            })
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{width: '100%', top: 0,}}>
                <Text style={{textAlign: 'justify', fontSize: 17, fontWeight: '700'}}>
                    Porfavor Ingrese el correo con el que esta registrado,
                    Revise su correo para restablecer su contraseña.
                </Text>
            </View>
            <TextInput style={styles.input} onChangeText={(text) => setEmail(text)} value={email} placeholder='correo' />
            <TouchableOpacity style={styles.button} onPress={ResetPassword}>
                <Text style={{color: 'white', fontSize: 16}}>Reset Password</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: 20,
        paddingHorizontal: 10,
    },
    input: {
        padding: 13,
        margin: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray',
        width: '100%',
    },
    button:{
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: 'blue',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})
