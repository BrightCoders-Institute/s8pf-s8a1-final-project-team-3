
import React, {useState} from 'react';
import {View, TextInput, Alert, Text, ScrollView, TouchableOpacity} from 'react-native';
import Logo from '../assets/img/origlogo.svg';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginwithemail = () => {
    auth().signInWithEmailAndPassword(email,password)
    .then((resp) => {
        console.log(resp)
        Alert.alert("logged in successfully")
        // navigation.navigate('TabHome')
        navigation.replace('TabHome')
    })
    .catch((error) => {
        console.log(error.nativeErrorMessage)
        Alert.alert(error.nativeErrorMessage)
    })
}

const RegisterScreenMove = () => {
  navigation.replace('Register')
}

  return (
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.form}>
          <Text style={styles.formText}>Email: </Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
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
          <TouchableOpacity style={styles.textForgot}>
            <Text style={styles.textFor}> Forgot Password? </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={loginwithemail}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={RegisterScreenMove} style={styles.btnregister}>
            <Text style={styles.textRegistrer}> Registrer </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
};



export default Login;

const styles = {
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    top: -100,
  },
  form: {
    width: '100%',
    top: -185,
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
    marginTop: 15,
    fontSize: 16,
    marginRight: 150,
    fontWeight: 'bold',
  },
  textForgot: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textFor:{
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
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

  textRegistrer: {
    fontSize: 16,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
  btnregister:{
    flexDirection: 'row',
    justifyContent: 'center',
  }
};