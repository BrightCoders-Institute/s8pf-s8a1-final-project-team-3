import React, { useEffect, useState } from 'react';
import {StyleSheet, View, TextInput, Alert, Text, ScrollView, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore'; 
import auth from '@react-native-firebase/auth'

const ResetEmailperfil = ({user}) => {

  const [password, setPassword] = useState('');
  const [emailnuevo, setemailNuevo] = useState('');
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

    const ChangeEmail = () => {
        auth()
          .signInWithEmailAndPassword(user.email, password)
          .then(userCredential => {
            // Actualizar el correo electrónico
            const user = userCredential.user;
            user.updateEmail(emailnuevo)
              .then(() => {
                saveUserDataEmail(user);
                console.log('Correo electrónico actualizado exitosamente.');
                Alert.alert('Correo electrónico actualizado exitosamente.');
              })
              .catch(error => {
                console.error('Error al actualizar el correo electrónico:', error);
              });
          })
          .catch(error => {
            console.error('Error al iniciar sesión:', error);
          });
      };

    const saveUserDataEmail = (user: any) => {
        firestore()
            .collection('users') // Selecciona la colección 'users'
            .doc(user.uid) // Crea un documento con el ID del usuario
            .set({ // Guarda los datos del usuario
                name: userData.name,
                lastname: userData.lastname,
                email: emailnuevo,
                uid: user.uid,
                password: password
            })
            .then(() => {
                console.log('User added!');
            });
    };

    const  salir = () => {
        auth()
          .signOut()
          .then(() => console.log('Usuario desconectado.'));
      }

      const check = () =>{
        console.log(user.email)
      }
      
  return (
    <View style={styles.container}>
      <TextInput
          value={user.email}
          editable={false}
          selectTextOnFocus={false}
          style={{color: 'black'}}
        />
      <TextInput
        style={styles.input}
        placeholder="Nuevo correo electronico"
        keyboardType="email-address"
        value={emailnuevo}
        onChangeText={setemailNuevo}
      />

      <TextInput
        placeholder="contraseña"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />

<TouchableOpacity onPress={ChangeEmail}>
          <Text>check</Text>
        </TouchableOpacity>

<TouchableOpacity onPress={salir}>
          <Text>salir</Text>
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
});

export default ResetEmailperfil;
