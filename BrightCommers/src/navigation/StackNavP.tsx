import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import TabBottomP from './TabBottomP';
import Registrer from '../screens/Registrer';
import Login from '../screens/Login';
import KitchenScreen from '../screens/kitchenScreen';
import GamingScreen from '../screens/GamingScreen';
import HomeScreenProducts from '../screens/HomeScreenProducts';
import SchoolScreen from '../screens/SchoolScreen';
import WorkoutScreen from '../screens/WorkoutScreen';


const Stack = createStackNavigator();

const StackNavP = () => {
  return (
    /*
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Register" component={Registrer} />
      <Stack.Screen name="TabHome" component={TabBottomP} />
    </Stack.Navigator>
    */
    <WorkoutScreen />
  )
}

export default StackNavP

