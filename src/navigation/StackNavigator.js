import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProductsScreen from '../screens/ProductsScreen';
import DrawerNavigator from './DrawerNavigator';
import DrawerHeader from '../components/Header/DrawerHeader';
import WishlistScreen from '../screens/WishListScreen';
import VoucherScreen from '../screens/VoucherScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import UpdateProfileScreen from '../screens/UpdateProfileScreen';
import CartScreen from '../screens/CartScreen';
import OrderConfirmationScreen from '../screens/OrderConfirmationScreen';
import AuthNavigator from './AuthNavigator';
import OrderSuccessScreen from '../screens/OrderSuccessScreen';
import OrdersScreen from '../screens/OrdersScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import AddressesScreen from '../screens/AddressesScreen';
import AddressFormScreen from '../screens/AddressFormScreen';

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
        name="AuthNavigator"
        component={AuthNavigator}
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
        name="OrderSuccessScreen"
        component={OrderSuccessScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="OrdersScreen"
        component={OrdersScreen}
        options={{
          header: () => (
            <DrawerHeader title={'My Orders'} actionRightShown={false} />
          ),
        }}
      />

      <Stack.Screen
        name="OrderDetailsScreen"
        component={OrderDetailsScreen}
        options={{
          header: () => (
            <DrawerHeader title={'Order Details'} actionRightShown={false} />
          ),
        }}
      />

      <Stack.Screen
        name="AddressesScreen"
        component={AddressesScreen}
        options={{
          header: () => (
            <DrawerHeader title={'Address '} actionRightShown={false} />
          ),
        }}
      />

      <Stack.Screen
        name="AddressFormScreen"
        component={AddressFormScreen}
        options={{
          header: () => (
            <DrawerHeader title={'New Address'} actionRightShown={false} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
