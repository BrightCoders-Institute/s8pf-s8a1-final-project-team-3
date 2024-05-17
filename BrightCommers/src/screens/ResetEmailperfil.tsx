import React, { useEffect, useState } from 'react';
import { StyleSheet, View, TextInput, Alert, Text, ScrollView, TouchableOpacity } from 'react-native';
import firestore from '@react-native-firebase/firestore'; 
import auth from '@react-native-firebase/auth';

const ResetEmailperfil = ({ user }) => {
  const [password, setPassword] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth().currentUser;
        if (currentUser) {
          const userId = currentUser.uid;
          const userDoc = await firestore().collection('users').doc(userId).get();
          if (userDoc.exists) {
            setUserData(userDoc.data());
          } else {
            console.log('No user data found for this user');
          }
        } else {
          console.log('No authenticated user');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  const changeEmail = () => {
    auth()
      .signInWithEmailAndPassword(user.email, password)
      .then(userCredential => {
        const user = userCredential.user;
        user.updateEmail(newEmail)
          .then(() => {
            saveUserDataEmail(user);
            console.log('Email updated successfully.');
            Alert.alert('Email updated successfully.');
          })
          .catch(error => {
            console.error('Error updating email:', error);
          });
      })
      .catch(error => {
        console.error('Error signing in:', error);
      });
  };

  const saveUserDataEmail = (user) => {
    firestore()
      .collection('users')
      .doc(user.uid)
      .set({
        name: userData.name,
        lastname: userData.lastname,
        email: newEmail,
        uid: user.uid,
        password: password
      })
      .then(() => {
        console.log('User data updated!');
      });
  };



  const check = () => {
    console.log(user.email)
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={user.email}
        editable={false}
        selectTextOnFocus={false}
        style={styles.disabledInput}
      />
      <TextInput
        style={styles.input}
        placeholder="New email"
        keyboardType="email-address"
        value={newEmail}
        onChangeText={setNewEmail}
      />
      <TextInput
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={changeEmail}>
        <Text style={styles.buttonText}>Change Email</Text>
      </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  disabledInput: {
    color: 'black',
    height: 40,
    width: 300,
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#f0f0f0',
  },
  button: {
    backgroundColor: '#1F379A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ResetEmailperfil;
