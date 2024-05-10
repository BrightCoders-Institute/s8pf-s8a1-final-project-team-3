import React, {useState} from 'react';
import {View, TextInput, Alert, Text, ScrollView, TouchableOpacity} from 'react-native';
import Logo from '../assets/img/origlogo.svg';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore'; 

const Registrer = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setname] = useState('')
  const [lastname, setlastname] = useState('')

  const handleLogin = () => {
    auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => { // userCredential contiene información del usuario recién creado
                const user = userCredential.user; // Obtén el usuario
                saveUserData(user); // Guarda los datos del usuario en Firestore
                Alert.alert("User Created with those credentials please login");
                navigation.replace('login');
            })
            .catch((error) => {
                console.log(error);
                // Manejar el error adecuadamente, por ejemplo, mostrar una alerta al usuario
                Alert.alert("Error", error.message);
            });
}

const saveUserData = (user: any) => {
  firestore()
      .collection('users') // Selecciona la colección 'users'
      .doc(user.uid) // Crea un documento con el ID del usuario
      .set({ // Guarda los datos del usuario
          email: user.email,
          uid: user.uid,
          password: password,
          name: name,
          lastname: lastname
      })
      .then(() => {
          console.log('User added!');
      });
};

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
            value={name}
            onChangeText={text => setname(text)}
            style={styles.input}
          />
          <Text style={styles.formText}>Last name: </Text>
          <TextInput
            placeholder="Last name "
            value={lastname}
            onChangeText={text => setlastname(text)}
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

