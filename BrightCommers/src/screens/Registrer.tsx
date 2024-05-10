import React, {useState} from 'react';
import {View, TextInput, Alert, Text, ScrollView, TouchableOpacity} from 'react-native';
import Logo from '../assets/img/origlogo.svg';
import auth from '@react-native-firebase/auth';

const Registrer = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    try {
        auth().createUserWithEmailAndPassword(email, password).then(() => {
            Alert.alert("User Created with those credentials please login")
        })
    } catch (error) {
        console.log(error)
        Alert.alert("User not created, try again later")
    }
}

  return (
    <ScrollView>
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.form}>
          <Text style={styles.formTextE}>Name: </Text>
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <Text style={styles.formText}>Last name: </Text>
          <TextInput
            style={styles.input}
          />
          <Text style={styles.formText}>Email: </Text>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.formText}>Password: </Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  logo: {
    width: 186,
    height: 186,
    marginTop: -102,
  },
  form: {
    width: '100%',
    top: -215,
  },
  input: {
    borderWidth: 2,
    borderColor: '#C4CDD6',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 18,
    width: '100%',
  },
  formText: {
    marginBottom: 12,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7E7E7E'
  },
  formTextE: {
    marginBottom: 12,
    marginTop: 72,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7E7E7E'
  },
  button: {
    backgroundColor: '#0139A6',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 48,
    marginBottom: 24,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
};

export default Registrer;

