import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Logo from '../assets/icons/user.svg';
import Flecha from '../assets/icons/arrowleft.svg';
const Porfile = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <View>
          <Flecha style={styles.arrow}/>
          </View>
            <Text style={styles.textHeader}>Mi perfil </Text>
        </View>
        <View style={styles.card}>
          <View>
           <Logo style={styles.logo}/> 
          </View>
          <Text style={styles.user}>Nombre de usuario</Text>
          <Text style={styles.email}>ExampleCorreo@gmail.com</Text>
        </View>
        <View style={styles.cardEdit}>
            <View>
              <View>
                <Text style={styles.userEdit}>Nombre de usuario:</Text>
                <Text style={styles.userExample}>Nombre de usuario example</Text>
             </View>
              <View>
                <Text style={styles.userEdit}>Correo:</Text>
                <Text style={styles.userExample}>ExampleCorreo@gmail.com</Text>
             </View>
               <View>
                <Text style={styles.userEdit}>Contrasena</Text>
                <Text style={styles.userExample}>********</Text>
             </View>
           </View>
             <View>
              <View>
               <TouchableOpacity style={styles.btnEditUser}>
                <Text style={styles.txtEdit}>Editar</Text>
               </TouchableOpacity>
             </View>
             <View>
               <TouchableOpacity style={styles.btnEditEmail}>
                <Text style={styles.txtEdit}>Editar</Text>
               </TouchableOpacity>
             </View>
             <View>
               <TouchableOpacity style={styles.btnEditPassword} >
                <Text style={styles.txtEdit}>Editar</Text>
               </TouchableOpacity>
             </View>
            </View>
        </View>
    </View>
  );
};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',   
        marginTop:650,
    },
    header: {
        top: -336,
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
    card: {
        width: '92%',
        height: 140,
        top: -330,
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
      logo: {
        top: 13,
        width: 74, 
        height: 74,
      },
      user: {
        left: 88,
        fontSize: 19,
        color: 'black',
        fontWeight: 'bold',
        top: -45,
      },
      email: {
        left: 88,
        fontSize: 16,
        top: -43,
      }, 

      cardEdit: {
        flexDirection: 'row',
        width: '92%',
        height: 570,
        top: -330,
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

      userEdit:{
        marginLeft:1,
        marginTop: 30,
        fontSize: 17,
        color: 'black',
        fontWeight: 'bold',
      }, 
      btnEditUser: {
        marginTop: 42,
        left: 80,
      },
      btnEditEmail: {
        marginTop: 53,
        left: 80,
      },
      btnEditPassword: {
        marginTop: 55,
        left: 80,
      },
      txtEdit: {
        color:  '#1F379A',
        textDecorationLine: 'underline',
      }
}

export default Porfile
