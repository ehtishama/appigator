import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DrawerHeader from '../components/Header/DrawerHeader';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createNativeStackNavigator();

export default function AuthNavigator() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{
          title: 'Signup',
          header: () => <DrawerHeader logo actionRightShown={false} />,
        }}
      />

      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          title: 'Login',
          header: () => <DrawerHeader logo actionRightShown={false} />,
        }}
      />

      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
        options={{
          title: 'Forgot Password',
          header: () => <DrawerHeader logo actionRightShown={false} />,
        }}
      />
    </Stack.Navigator>
  );
}
