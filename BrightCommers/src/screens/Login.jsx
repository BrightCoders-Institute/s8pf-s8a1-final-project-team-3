import React, {useState} from 'react';
import {View, TextInput, Button, Alert, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import Logo from '../assets/img/origlogo.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para iniciar sesión con el email y contraseña proporcionados
    Alert.alert('Login', `Email: ${email}, Password: ${password}`);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
         <Logo/>
        <View style={styles.form}>
          <Text style={styles.formText}>Email: </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <Text style={styles.formText}>Password: </Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity>
            <Text style={styles.textForgot}> Forgot Password? </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textRegistrer}> Forgot Password? </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50, // Mover todos los elementos hacia abajo
  },
  form: {
    width: '100%',
    marginBottom: 170,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  formText: {
    marginBottom: 6,
    fontSize: 16,
    marginRight: 150,
    fontWeight: 'bold',
  },
  textForgot: {
    marginBottom: 22,
    marginLeft: 230,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },

  textRegistrer: {
    fontSize: 16,
    marginBottom: 15,
    textDecorationLine: 'underline',
  },
};

export default Login;
