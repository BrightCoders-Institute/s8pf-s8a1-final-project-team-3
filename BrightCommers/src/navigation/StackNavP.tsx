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
//import HomeScreen from '../screens/HomeScreen';
import AddressandinfoScreen from '../screens/addressandinfoScreen';
import ProductScreen from '../screens/ProductScreen';
import ShoppingScreen from '../screens/shoppingScreen';
import EditName from '../screens/EditName';
import EditEmail from '../screens/EditEmail';
import EditPassword from '../screens/EditPassword';
import Home from '../screens/home';
import SearchBar from '../components/searchBar';
import Porfile from '../screens/Porfile';

const Stack = createStackNavigator();

const StackNavP = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} /> 
      <Stack.Screen name="Register" component={Registrer} />
      <Stack.Screen name="TabHome" component={TabBottomP} />
      {/* <Stack.Screen name="KitchenScreen" component={KitchenScreen} /> */}




{/* 
      <Stack.Screen name="AddressandinfoScreen" component={AddressandinfoScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} />
      <Stack.Screen name="EditName" component={EditName} />
      <Stack.Screen name="EditEmail" component={EditEmail} />
      <Stack.Screen name="EditPassword" component={EditPassword} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SearchBar" component={SearchBar} />
      <Stack.Screen name="KitchenScreen" component={KitchenScreen} />
      <Stack.Screen name="GamingScreen" component={GamingScreen} />
      <Stack.Screen name="HomeScreenProducts" component={HomeScreenProducts} />
      <Stack.Screen name="SchoolScreen" component={SchoolScreen} />
      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} /> */}
      
    </Stack.Navigator>
  )
}

export default StackNavP
