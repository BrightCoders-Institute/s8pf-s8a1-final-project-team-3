
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
          <Text style={styles.formText}>Name: </Text>
          <TextInput
            placeholder="name"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <Text style={styles.formText}>Last name: </Text>
          <TextInput
            placeholder="Last name "
            style={styles.input}
          />
          <Text style={styles.formText}>Email: </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <Text style={styles.formText}>Password: </Text>
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Registrer</Text>
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
    marginTop: 20,
  },
  logo: {
    top: -100,
  },
  form: {
    width: '100%',
    top: -215,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    padding: 7,
    marginBottom: 10,
    width: '100%',
  },
  formText: {
    marginBottom: 6,
    marginTop: 15,
    fontSize: 16,
    marginRight: 150,
    fontWeight: 'bold',
  },
  textForgot: {
    marginBottom: 22,
    marginLeft: 230,
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 8,
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

  textRegistrer: {
    marginLeft: 150,
    fontSize: 16,
    marginBottom: 15,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
};

export default Registrer;

