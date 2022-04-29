import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsScreen from '../screens/ProductsScreen';
import DrawerNavigator from './DrawerNavigator';
import DrawerHeader from '../components/Header/DrawerHeader';
import WishlistScreen from '../screens/WishListScreen';
import VoucherScreen from '../screens/VoucherScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import AddressScreen from '../screens/AddressScreen';
import CartScreen from '../screens/CartScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import SignupScreen from '../screens/SignupScreen';
import LoginScreen from '../screens/LoginScreen';

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
        name="ProductDetailsScreen"
        component={ProductDetailsScreen}
        options={{
          title: 'Product Details',
          header: DrawerHeader,
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
      <Stack.Screen
        name="UpdateProfileScreen"
        component={UpdateProfileScreen}
        options={{
          title: 'Update Profile',
          header: ({options: {title}}) => (
            <DrawerHeader title={title} actionRightShown={false} />
          ),
        }}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          title: 'Cart',
          header: ({options: {title}}) => (
            <DrawerHeader title={title} actionRightShown={false} />
          ),
        }}
      />

      <Stack.Screen
        name="OrderConfirmationScreen"
        component={OrderConfirmationScreen}
        options={{
          title: 'Order Confirmation',
          header: ({options: {title}}) => (
            <DrawerHeader title={title} actionRightShown={false} />
          ),
        }}
      />

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
    </Stack.Navigator>
  );
}
