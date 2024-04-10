import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import KitchenScreen from '../screens/kitchenScreen';

const Stack = createStackNavigator();

const StackCategories = () => {
  return (

    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="KitchenScreen" component={KitchenScreen} />
    </Stack.Navigator>
  )
}

export default StackCategories