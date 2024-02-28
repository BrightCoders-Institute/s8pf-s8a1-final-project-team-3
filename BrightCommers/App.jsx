import React from 'react';
import notificacion from './img/Notificacion.png';
import carrito from './img/Carrito.png';

import {Text, StyleSheet, View, Image} from 'react-native';

const App = () => {
  return (
    <View>
      <Text style={styles.titulo}>
        Hello {''}
        <Text style={styles.tituloBold}>Carlos!</Text>
      </Text>
      <Image source={notificacion} style={styles.iconContainer} />
      <Image source={carrito} style={styles.iconContainer} />
    </View>
  );
};

const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 24,
    color: '#374151',
    fontWeight: '600',
  },
  tituloBold: {
    fontWeight: '900',
    color: '#000000',
  },
  iconContainer: {
    width: 30,
    height: 30,
  },
});

export default App;
