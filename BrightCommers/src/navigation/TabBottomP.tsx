import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import Porfiles from '../screens/Porfile';
import { Platform, Text, View } from 'react-native';
import Home from '../assets/icons/Home.svg';
import Heart from '../assets/icons/Heart.svg';
import Porfile from '../assets/icons/Porfile.svg';
import SearchScreen from '../screens/searchScreen';
import GamingScreen from '../screens/GamingScreen';
import SchoolScreen from '../screens/SchoolScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import HomeScreenProducts from '../screens/HomeScreenProducts';
import ProductScreen from '../screens/ProductScreen';

import { createStackNavigator } from '@react-navigation/stack';
import KitchenScreen from '../screens/kitchenScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabBottomP = () => {
  return (
    <Tab.Navigator screenOptions={bottomScreenOptions}>
      <Tab.Screen
        name="Home"
        component={StackCategory} 
      options={{ 
        tabBarIcon: ({ focused }) => {
          return (
            <View style={[{flexDirection: 'column', justifyContent:'center', alignItems: 'center',width: '100%', gap:5}, Platform.OS === 'ios' && {marginTop: 20}]}>
              {/* <IconComponent name="home" color={focused ? 'red' : 'white'} />
              <TextComponent text="Home" color={focused ? 'red' : 'white'} /> */}
              <Home />
              <Text style={{fontSize: 10}}>
                Home
              </Text>
            </View>
          );
        },
      }}
      />

<Tab.Screen
        name="Heart"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={[{flexDirection: 'column', justifyContent:'center', alignItems: 'center',width: '100%', gap:5}, Platform.OS === 'ios' && {marginTop: 20}]}>
                {/* <IconComponent name="home" color={focused ? 'red' : 'white'} />
                <TextComponent text="Home" color={focused ? 'red' : 'white'} /> */}
                <Heart />
                <Text style={{fontSize: 10}}>
                  Favorites
                </Text>
              </View>
            );
          },
        }}
        />

      <Tab.Screen
        name="Porfile"
        component={Porfiles}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={[{flexDirection: 'column', justifyContent:'center', alignItems: 'center',width: '100%', gap:5}, Platform.OS === 'ios' && {marginTop: 20}]}>
                {/* <IconComponent name="home" color={focused ? 'red' : 'white'} />
                <TextComponent text="Home" color={focused ? 'red' : 'white'} /> */}
                <Porfile />
                <Text style={{fontSize: 10}}>
                  Porfile
                </Text>
              </View>
            );
          },
        }}
        />
        
    </Tab.Navigator>

  )
}

export default TabBottomP


export const StackCategory = () => {
  
  return(
  <Stack.Navigator>
    <Stack.Screen options={{headerShown: false}} name='Homee' component={HomeScreen}/>
    <Stack.Screen name='KitchenScreen' component={KitchenScreen}/>
    <Stack.Screen name='GamingScreen' component={GamingScreen}/>
    <Stack.Screen name='HomeScreenProducts' component={HomeScreenProducts}/>
    <Stack.Screen name='SchoolScreen' component={SchoolScreen}/>
    <Stack.Screen name='WorkoutScreen' component={WorkoutScreen}/>
    <Stack.Screen options={{headerTitle: ''}} name='ProductScreen' component={ProductScreen}/>
  </Stack.Navigator>
  )
}

{/* <TabButtonUser.Screen
name="Home"
component={HomeScreen}
options={{
tabBarIcon: ({focused}) => {
return (
<View style={styles.iconContainer}>
<IconComponent name="home" color={focused ? 'red' : 'white'} />
<TextComponent text="Home" color={focused ? 'red' : 'white'} />
</View>
);
},
}}
/> */}



const bottomScreenOptions: BottomTabNavigationOptions = {
  tabBarShowLabel: false,
  headerShown: false,

  tabBarStyle: {
    //alignSelf: 'center', // Centra los elementos del tabBar
    // marginHorizontal: 16,
    // bottom: Platform.OS === 'ios' ? 30 : 20, // Espacio de 20 unidades desde la parte inferior
    // backgroundColor: '#1e164d', // Color de fondo del tabBar
    // borderRadius: 20, // establece un radio de borde
    alignContent: 'center',
    alignItems: 'center', // Alinea los elementos del tabBar en el centro
    height: Platform.OS === 'ios' ? 80 : 60,
  },
};