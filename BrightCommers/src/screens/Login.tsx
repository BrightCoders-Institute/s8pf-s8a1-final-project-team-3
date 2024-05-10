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

const ResetScreen = () => {
  navigation.navigate('Reset')
}

  return (
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.form}>
          <Text style={styles.formTextE}>Email </Text>
          <TextInput
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
          />
          <Text style={styles.formText}>Password </Text>
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <TouchableOpacity onPress={ResetScreen} style={styles.textForgot}>
            <Text  style={styles.textFor}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={loginwithemail}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={RegisterScreenMove} style={styles.btnregister}>
            <Text style={styles.textRegistrer}>Register</Text>
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
    paddingHorizontal: 16,
  },
  logo: {
    width: 186,
    height: 186,
  },
  form: {
    width: '100%',
    top: -165,
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
  textForgot: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textFor:{
    fontSize: 14,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#8A8B90'
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

  textRegistrer: {
    color: '#0139A6',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  btnregister:{
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#0139A6',
  }
};