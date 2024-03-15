
import React from 'react'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import { Platform, Text, View } from 'react-native';
import Home from '../assets/icons/Home.svg';
import Porfile from '../assets/icons/Porfile.svg';
import Heart from '../assets/icons/Heart.svg';
import SearchScreen from '../screens/SearchScreen';

const Tab = createBottomTabNavigator();

const TabBottomP = () => {
  return (
    <Tab.Navigator screenOptions={bottomScreenOptions}>
      <Tab.Screen
        name="Home"
        component={HomeScreen} 
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
        component={ShoppingScreen}
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