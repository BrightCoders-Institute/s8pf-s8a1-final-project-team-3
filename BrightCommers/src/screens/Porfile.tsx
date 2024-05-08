import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import Edit from '../assets/icons/edit.svg';
import LeftArrow from '../assets/icons/left.svg';

const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <LeftArrow />
        <Text style={styles.title}>Mi Perfil</Text>
      </View>

      <View style={styles.card}>
        <Image source={require('../assets/img/pfp.png')} style={styles.avatar}/>
        <View style={styles.userInfoContainer}>
          <Text style={styles.user}>Nombre de usuario</Text>
          <Text style={styles.email}>ExampleCorreo@gmail.com</Text>
        </View>
      </View>

      <View style={styles.cardEdit}>
        <View>
          <View style={styles.userInfoRow}>
            <View style={styles.userInfo}>
              <Text style={styles.user}>Nombre de usuario:</Text>
              <Text style={styles.email}>Nombre de usuario example</Text>
            </View>
            <TouchableOpacity style={styles.btnEditUser}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfoRow}>
            <View style={styles.userInfo}>
              <Text style={styles.user}>Correo:</Text>
              <Text style={styles.email}>ExampleCorreo@gmail.com</Text>
            </View>
            <TouchableOpacity style={styles.btnEditUser}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfoLastRow}>
            <View style={styles.userInfo}>
              <Text style={styles.user}>Contraseña</Text>
              <Text style={styles.email}>********</Text>
            </View>
            <TouchableOpacity style={styles.btnEditUser}>
              <Edit />
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
    padding: 16,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#282828',
    paddingLeft: 12,
    marginBottom: 2,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#f5f5f5',
    borderWidth: 2,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 50,
    marginRight: 10,
  },
  userInfoContainer: {
    flexDirection: 'column',
  },
  user:{
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#282828',
    fontWeight: 'bold',
  },
  email:{
    fontFamily: 'Inter',
    fontSize: 14,
    color: '#7E7E7E',
  },
  cardEdit: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 16,
    paddingVertical: 24,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: '#f5f5f5',
    borderWidth: 2,
  },
  userInfoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
    width: '100%', 
  },
  userInfoLastRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%', 
  },
  userInfo: {
    flexDirection: 'column',
  },
  btnEditUser: {
    backgroundColor: '#0139A6',
    width: 28,
    height: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
};

export default Profile;
