import React, { useEffect, useState } from 'react';
import {StyleSheet, View, TextInput, Alert,TouchableOpacity,Text} from 'react-native';
import firestore from '@react-native-firebase/firestore'; 
import auth from '@react-native-firebase/auth'

const ResetPassperfil = ({user}) => {

    const [password, setPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
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

    const handleReset = () => {
        auth()
          .signInWithEmailAndPassword(user.email, password)
          .then(userCredential => {
            // Actualizar el correo electrónico
            const user = userCredential.user;
            user.updatePassword(newpassword)
              .then(() => {
                saveUserDatapass(user);
                console.log('Contraseña actualizado exitosamente.');
                Alert.alert('Contraseña actualizado exitosamente.');
              })
              .catch(error => {
                console.error('Error al actualizar la contraseña:', error);
              });
          })
          .catch(error => {
            console.error('Error al iniciar sesión:', error);
          });
      };

    const saveUserDatapass = (user: any) => {
        firestore()
            .collection('users') // Selecciona la colección 'users'
            .doc(user.uid) // Crea un documento con el ID del usuario
            .set({ // Guarda los datos del usuario
                name: userData.name,
                lastname: userData.lastname,
                email: user.email,
                uid: user.uid,
                password: newpassword
            })
            .then(() => {
                console.log('User added!');
            });
      };

    return (
        <View>
            <TextInput
          placeholder="contraseña"
          value={password}
          secureTextEntry
          onChangeText={setPassword}
        />
        <TextInput
          placeholder="nueva contraseña"
          value={newpassword}
          secureTextEntry
          onChangeText={setnewPassword}
        />

<TouchableOpacity onPress={handleReset}>
          <Text>check</Text>
        </TouchableOpacity>
        
        </View>
    );
}

const styles = StyleSheet.create({})

export default ResetPassperfil;
