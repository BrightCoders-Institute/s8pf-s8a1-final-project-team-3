import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabBottomP from './TabBottomP';
import Registrer from '../screens/Registrer';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const StackNavP = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Register" component={Registrer} />
      <Stack.Screen name="TabHome" component={TabBottomP} />
    </Stack.Navigator>
  )
}

export default StackNavP

