import React from 'react';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import Porfiles from '../screens/Porfile';
import {Platform, Text, View} from 'react-native';
import Home from '../assets/icons/Home.svg';
import Heart from '../assets/icons/Heart.svg';
import Porfile from '../assets/icons/Porfile.svg';
import SearchScreen from '../screens/searchScreen';
import GamingScreen from '../screens/GamingScreen';
import SchoolScreen from '../screens/SchoolScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import HomeScreenProducts from '../screens/HomeScreenProducts';
import ProductScreen from '../screens/ProductScreen';
import ShoppingScreen from '../screens/shoppingScreen';
import ResetEmailperfil from '../screens/ResetEmailperfil';
import ResetPassperfil from '../screens/ResetPassperfil';
import ResetNamePerfil from '../screens/ResetNamePerfil';
import CardPayment from '../screens/CardPayment';
import Bag from '../assets/icons/bag3.svg';

import {createStackNavigator} from '@react-navigation/stack';
import KitchenScreen from '../screens/kitchenScreen';
import {useNavigation} from '@react-navigation/native';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBottomP = ({route}) => {
  const {user} = route.params;

  return (
    <Tab.Navigator screenOptions={bottomScreenOptions}>
      <Tab.Screen
        name="Home"
        component={StackCategory}
        initialParams={{user: user}}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  gap: 5,
                },
                Platform.OS === 'ios' && {marginTop: 20},
              ]}>
              <Home />
              <Text style={{fontSize: 10}}>Home</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Heart"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  gap: 5,
                },
                Platform.OS === 'ios' && {marginTop: 20},
              ]}>
              <Heart />
              <Text style={{fontSize: 10}}>Favorites</Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={StackPerfil}
        initialParams={{user : user}}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  gap: 5,
                },
                Platform.OS === 'ios' && {marginTop: 20},
              ]}>
              <Porfile />
              <Text style={{fontSize: 10}}>Porfile</Text>
            </View>
          ),
        }}
        />

<Tab.Screen
        name="Shopping"
        component={CardPayment}
        initialParams={{user : user}}
        options={{
          headerShown: true,
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',
                  gap: 5,
                },
                Platform.OS === 'ios' && {marginTop: 20},
              ]}>
              <Bag />
              <Text style={{fontSize: 10}}>Shopping</Text>
            </View>
          ),
        }}
        />
    </Tab.Navigator>
  );
};

export default TabBottomP;

export const StackCategory = ({route}) => {
  const {user} = route.params;
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Homee"
        component={HomeScreen}
      />
      <Stack.Screen name="KitchenScreen" component={KitchenScreen} />
      <Stack.Screen name="GamingScreen" component={GamingScreen} />
      <Stack.Screen name="HomeScreenProducts" component={HomeScreenProducts} />
      <Stack.Screen name="SchoolScreen" component={SchoolScreen} />
      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} />
      <Stack.Screen name="ShoppingScreen" component={ShoppingScreen} initialParams={{user : user}}/>
      <Stack.Screen
        options={{headerTitle: ''}}
        name="ProductScreen"
        component={ProductScreen}
      />
    </Stack.Navigator>
  );
};

export const StackPerfil = ({route}) => {

  const {user} = route.params
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Homee"
        component={Porfiles}
      />
      <Stack.Screen name="ResetEmailperfil">
        {props => <ResetEmailperfil {...props} user={user} />}
      </Stack.Screen>
      <Stack.Screen name="ResetPassPerfil">
        {props => <ResetPassperfil {...props} user={user} />}
      </Stack.Screen>
      <Stack.Screen name="ResetNamePerfil">
        {props => <ResetNamePerfil  {...props} user={user}/>}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const bottomScreenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  headerShown: false,

  tabBarStyle: {
    alignContent: 'center',
    alignItems: 'center',
    height: Platform.OS === 'ios' ? 80 : 60,
  },
};
