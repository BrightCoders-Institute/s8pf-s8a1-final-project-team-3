import React, {useState, useEffect} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ActivityIndicator,
  Image,
} from 'react-native';
import Logo from '../assets/icons/user.svg';
import {useNavigation} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import Edit from '../assets/icons/edit.svg';

const Profile = () => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const currentUser = auth().currentUser;
    if (!currentUser) {
      console.log('No hay usuario autenticado');
      return;
    }

    const userId = currentUser.uid;
    const userDocRef = firestore().collection('users').doc(userId);

    const unsubscribe = userDocRef.onSnapshot(doc => {
      if (doc.exists) {
        setUserData(doc.data());
      } else {
        console.log('No se encontraron datos para este usuario');
      }
    });

    return () => unsubscribe(); // Limpiar la suscripción cuando se desmonte el componente
  }, []);

  if (!userData) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1F379A" />
      </View>
    );
  }

  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out.'));
  };

  return (
    // <View style={styles.container}>
    //   <View style={styles.card}>
    //     <Logo style={styles.logo} />
    //     <View style={styles.userInfo}>
    //       <Text style={styles.user}>{userData.name} {userData.lastname}</Text>
    //       <Text style={styles.email}>{userData.email}</Text>
    //     </View>
    //   </View>
    //   <View style={styles.card}>
    //     <View style={styles.editSection}>
    //       <Text style={styles.userEdit}>Nombre de usuario:</Text>
    //       <Text style={styles.userExample}>{userData.name} {userData.lastname}</Text>
    //     </View>
    //     <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate('ResetNamePerfil')}>
    //       <Text style={styles.txtEdit}>Editar</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.card}>
    //     <View style={styles.editSection}>
    //       <Text style={styles.userEdit}>Correo:</Text>
    //       <Text style={styles.userExample}>{userData.email}</Text>
    //     </View>
    //     <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate('ResetEmailperfil')}>
    //       <Text style={styles.txtEdit}>Editar</Text>
    //     </TouchableOpacity>
    //   </View>
    //   <View style={styles.card}>
    //     <View style={styles.editSection}>
    //       <Text style={styles.userEdit}>Contraseña:</Text>
    //       <Text style={styles.userExample}>********</Text>
    //     </View>
    //     <TouchableOpacity style={styles.btnEdit} onPress={() => navigation.navigate('ResetPassPerfil')}>
    //       <Text style={styles.txtEdit}>Editar</Text>
    //     </TouchableOpacity>
    //   </View>
    // </View>

    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/img/pfp.png')}
          style={styles.avatar}
        />
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
            <TouchableOpacity
              style={styles.btnEditUser}
              onPress={() => navigation.navigate('ResetNamePerfil')}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfoRow}>
            <View style={styles.userInfo}>
              <Text style={styles.user}>Correo:</Text>
              <Text style={styles.email}>ExampleCorreo@gmail.com</Text>
            </View>
            <TouchableOpacity
              style={styles.btnEditUser}
              onPress={() => navigation.navigate('ResetEmailperfil')}>
              <Edit />
            </TouchableOpacity>
          </View>
          <View style={styles.userInfoLastRow}>
            <View style={styles.userInfo}>
              <Text style={styles.user}>Contraseña</Text>
              <Text style={styles.email}>********</Text>
            </View>
            <TouchableOpacity
              style={styles.btnEditUser}
              onPress={() => navigation.navigate('ResetPassPerfil')}>
              <Edit />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{width: '100%', padding: 10, backgroundColor: '#0139A6', borderRadius: 10}}>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} onPress={signOut}>
          <Text style={{color: 'white', fontSize: 16}}>Salir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'flex-start',
  //   alignItems: 'center',
  //   padding: 20,
  //   backgroundColor: '#F5F5F5',
  // },
  // loadingContainer: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5F5F5',
  // },
  // card: {
  //   width: '100%',
  //   backgroundColor: '#fff',
  //   borderRadius: 10,
  //   padding: 20,
  //   marginVertical: 10,
  //   shadowColor: '#000',
  //   shadowOffset: { width: 0, height: 2 },
  //   shadowOpacity: 0.1,
  //   shadowRadius: 4,
  //   elevation: 5,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  // },
  // logo: {
  //   width: 74,
  //   height: 74,
  // },
  // userInfo: {
  //   flex: 1,
  //   marginLeft: 20,
  // },
  // user: {
  //   fontSize: 19,
  //   color: '#333',
  //   fontWeight: 'bold',
  // },
  // email: {
  //   fontSize: 16,
  //   color: '#666',
  // },
  // editSection: {
  //   flex: 1,
  // },
  // userEdit: {
  //   fontSize: 17,
  //   color: '#333',
  //   fontWeight: 'bold',
  //   marginVertical: 5,
  // },
  // userExample: {
  //   fontSize: 16,
  //   color: '#666',
  //   marginBottom: 10,
  // },
  // btnEdit: {
  //   paddingVertical: 10,
  //   paddingHorizontal: 20,
  //   backgroundColor: '#1F379A',
  //   borderRadius: 5,
  // },
  // txtEdit: {
  //   color: '#fff',
  //   fontWeight: 'bold',
  // },

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
  user: {
    fontFamily: 'Inter',
    fontSize: 16,
    color: '#282828',
    fontWeight: 'bold',
  },
  email: {
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
});

export default Profile;
