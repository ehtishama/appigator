import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsScreen from '../screens/ProductsScreen';
import DrawerNavigator from './DrawerNavigator';
import DrawerHeader from '../components/Header/DrawerHeader';
import WishlistScreen from '../screens/WishListScreen';
import AccountScreen from '../screens/AccountScreen';
import VoucherScreen from '../screens/VoucherScreen';

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
      <Stack.Screen
        name="WishListScreen"
        component={WishlistScreen}
        options={{
          title: 'Wish List',
          header: ({options: {title}}) => (
            <DrawerHeader title={title} actionRightShown={false} />
          ),
        }}
      />

      <Stack.Screen
        name="VoucherScreen"
        component={VoucherScreen}
        options={{
          title: 'Voucher',
          header: ({options: {title}}) => (
            <DrawerHeader title={title} actionRightShown={false} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
