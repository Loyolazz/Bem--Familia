import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Presentation from '../../../screens/SetScreens/Presentation';
import InitialScreen from '../../../screens/SetScreens/InitialScreen';
import Registration from '../../../screens/SetScreens/Registration';
import Login from '../../../screens/SetScreens/Login';
import PasswordForgot from '../../../screens/SetScreens/PasswordForgot';
import Splash from '../../../screens/SetScreens/SplashScreen';
import ResetPassword from '../../../screens/SetScreens/ResetPassword';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Presentation" component={Presentation} />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen name="InitialScreen" component={InitialScreen} />
      <Stack.Screen
        name="Registration"
        component={Registration}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}
      />
      <Stack.Screen
        name="PasswordForgot"
        component={PasswordForgot}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}
        
      />
       <Stack.Screen
        name="ResetPassword"
        component={ResetPassword}
        options={{
          headerShown: true,
          headerTransparent: true,
          title: '',
        }}
        
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
