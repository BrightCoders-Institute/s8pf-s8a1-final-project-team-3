/**
 * @format
 */

import {AppRegistry} from 'react-native';
import HomeScreen from './screens/homeScreen';
import SearchScreen from './screens/searchScreen';
import shoppingScreen from './screens/shoppingScreen';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => shoppingScreen);