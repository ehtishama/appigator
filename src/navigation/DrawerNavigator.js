import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';

import ProfileScreen from '../screens/ProfileScreen';
import TabNavigator from '../navigation/TabNavigator';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name="HomeTab" component={TabNavigator} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}
