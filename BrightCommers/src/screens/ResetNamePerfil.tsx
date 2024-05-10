import React, {useState, useEffect} from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text} from 'react-native';
import firestore from '@react-native-firebase/firestore'; 
import auth from '@react-native-firebase/auth'

const ResetNamePerfil = ({user}) => {


  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [userData, setUserData] = useState ('');

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
            console.log('No se encontraron datos para este usuario');
          }
        } else {
          console.log('No hay usuario autenticado');
        }
      } catch (error) {
        console.error('Error al obtener los datos del usuario:', error);
      }
    };
  
    fetchUserData();
  }, []);

  const saveData = async () => {
    try {
      const currentUser = auth().currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        await firestore()
          .collection('users')
          .doc(userId)
          .update({
            name: name || userData.name, // si name está vacío, mantén el valor existente
            lastname: lastname || userData.lastname, // si lastname está vacío, mantén el valor existente
          });
        console.log('User data updated!');
      } else {
        console.log('No hay usuario autenticado');
      }
    } catch (error) {
      console.error('Error al actualizar los datos del usuario:', error);
    }
  };

    return (
        <View>

<TextInput
          value={name}
          placeholder={userData.name}
          style={{color: 'black'}}
          onChangeText={setName}
        />
      <TextInput
        style={{color: 'black'}}
        placeholder={userData.lastname}
        value={lastname}
        onChangeText={setLastname}
      />

<TouchableOpacity onPress={saveData}>
          <Text>check</Text>
        </TouchableOpacity>
            
        </View>
    );
}

const styles = StyleSheet.create({})

export default ResetNamePerfil;
