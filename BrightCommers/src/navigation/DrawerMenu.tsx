import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

export const DrawerMenu = () => {
  return (
    <Drawer.Navigator initialRouteName='Homee'screenOptions={{drawerType: 'front', headerShown: false}}>
      <Drawer.Screen name="Homee" component={HomeScreen} />
    </Drawer.Navigator>
  );
}