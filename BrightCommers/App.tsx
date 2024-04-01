import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import TabBottomP from './src/navigation/TabBottomP';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Safearea from './src/layout/Safearea';
import StackNavP from './src/navigation/StackNavP';
import EditEmail from './src/screens/EditEmail';


const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Safearea>
          <StackNavP/> 
        </Safearea>
    </NavigationContainer>  
    </SafeAreaProvider>
    );
};

export default App;