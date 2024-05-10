
import { createStackNavigator } from '@react-navigation/stack';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import { useEffect, useState } from 'react';
import auth from '@react-native-firebase/auth';
import Login from '../screens/Login';
import Registrer from '../screens/Registrer';
import TabBottomP from './TabBottomP';

const Stack = createStackNavigator();

const StackNavP = () => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null as any);
  const [isNewUser, setIsNewUser] = useState(false);

  useEffect(() => {
      const subscriber = auth().onAuthStateChanged((user) => {
          setUser(user);
          if (initializing) setInitializing(false);
          // Check if the user is newly registered
          if (user && user.metadata.creationTime === user.metadata.lastSignInTime) {
              setIsNewUser(true);
          }
      });

      // Cleanup subscription
      return subscriber;
  }, [initializing]);

  if (initializing) {
      // Firebase is initializing, show loading or splash screen
      return null;
  }
  

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
            {!user || isNewUser ? ( // Check if there is no user or if the user is newly registered
                <>
                    <Stack.Screen name="login">
                        {(props) => <Login {...props} />}
                    </Stack.Screen>
                    <Stack.Screen name="Register" component={Registrer} />
                    <Stack.Screen options={{headerShown: true}} name="Reset" component={ResetPasswordScreen} />
                </>
            ) : (
                <Stack.Screen name="TabBottomP" 
                component={TabBottomP}
                initialParams={{user: user}}
                />
            )}
        </Stack.Navigator>
  );
};

export default StackNavP;
