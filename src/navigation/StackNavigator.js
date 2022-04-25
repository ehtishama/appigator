import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsScreen from '../screens/ProductsScreen';
import DrawerNavigator from './DrawerNavigator';
import DrawerHeader from '../components/Header/DrawerHeader';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductsScreen"
        component={ProductsScreen}
        options={{
          title: 'Products',
          header: ({options: {title}}) => <DrawerHeader title={title} />,
        }}
      />
    </Stack.Navigator>
  );
}
