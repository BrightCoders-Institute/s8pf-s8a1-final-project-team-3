import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const ResetNamePerfil = ({ user }) => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState(null);
  const [nameError, setNameError] = useState('');
  const [lastnameError, setLastnameError] = useState('');

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

  const saveData = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        await firestore().collection('users').doc(userId).update({
          name: name || userData.name, // If name is empty, keep the existing value
          lastname: lastname || userData.lastname, // If lastname is empty, keep the existing value
        });
        Alert.alert('Success', 'Changes have been saved successfully');
      } else {
        console.log('No authenticated user');
      }
    } catch (error) {
      console.error('Error updating user data:', error);
      Alert.alert('Error', 'An error occurred while saving changes');
    }
  };

  const validateName = () => {
    if (!name.trim()) {
      setNameError('Name is required');
    } else {
      setNameError('');
    }
  };

  const validateLastname = () => {
    if (!lastname.trim()) {
      setLastnameError('Lastname is required');
    } else {
      setLastnameError('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput
        style={[styles.input, nameError ? styles.inputError : null]}
        value={name}
        placeholder="Enter your name"
        onChangeText={setName}
        onBlur={validateName}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
      <Text style={styles.label}>Lastname</Text>
      <TextInput
        style={[styles.input, lastnameError ? styles.inputError : null]}
        placeholder="Enter your lastname"
        value={lastname}
        onChangeText={setLastname}
        onBlur={validateLastname}
      />
      {lastnameError ? <Text style={styles.errorText}>{lastnameError}</Text> : null}
      <TouchableOpacity style={styles.button} onPress={saveData}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  inputError: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#1F379A',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default ResetNamePerfil;
