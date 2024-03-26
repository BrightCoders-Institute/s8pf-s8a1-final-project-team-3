import React from 'react';
import { Text, View , TextInput, TouchableOpacity} from 'react-native';
import Flecha from '../assets/icons/arrowleft.svg';

const EditEmail = () => {
  return (
    <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Flecha style={styles.arrow}/>
            </View>
              <Text style={styles.textHeader}>Usuario</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.infoText}>Escoge una dirección de correo valida</Text> 
            <Text style={styles.adText}>El correo seleccionado sera donde llegaran los datos de actualización de tus compras. </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.textName}>Email:</Text>
            <TextInput style={styles.inputName} placeholder='Email@example.com'></TextInput>

            <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Guardar</Text>
          </TouchableOpacity>
      
        </View>
      </View>
  )
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',   
    marginTop:20,
},
header: {
    top: -244,
    backgroundColor: '#1F379A',
    width: '100%',
    height: 66,
    justifyContent: 'center',
    alignItems: 'center',
},
arrow: {
  right: 170,
  top: 16,
  width: 43,
  height: 43,
},
textHeader:{
  left: 1,
  color: 'white',
  fontSize: 24,  
  top: -20
},

info: {
  top: -180,
},

infoText: {
  color: 'black',
  fontSize: 22,
  fontWeight: 'bold',
},

adText:{
  top: 5,
},

card: {
  width: '95%',
  height: 220,
  top: -145,
  backgroundColor: '#fff',
  borderRadius: 10,
  padding: 20,
  margin: 10,
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
},
textName: {
  fontSize: 15,
  color: 'black',   
}, 
inputName: {
  borderWidth: 1,
  borderColor: '#ccc', 
  borderRadius: 7,
  marginTop: 10,
  marginBottom: 28, 
},

button: {
  backgroundColor: 'blue',
  paddingVertical: 10,
  paddingHorizontal: 20,
  borderRadius: 10,
  marginVertical: 10,
},
buttonText: {
  color: 'white',
  fontWeight: 'bold',
  fontSize: 18,
  textAlign: 'center',
},

}

export default EditEmail
