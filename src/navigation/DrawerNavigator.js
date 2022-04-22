import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import ProfileScreen from '../screens/ProfileScreen';
import TabNavigator from '../navigation/TabNavigator';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{headerShown: false}}
      drawerContent={DrawerContent}>
      <Drawer.Screen name="HomeTab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
