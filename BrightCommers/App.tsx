import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet,Text,View,} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { DrawerMenu } from './src/stacknavigator/DrawerMenu';


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <DrawerMenu/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default App;
