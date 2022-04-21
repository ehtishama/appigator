import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriesScreen from '../screens/CategoriesScreen';
import AccountScreen from '../screens/AccountScreen';
import ContactScreen from '../screens/ContactScreen';
import DrawerHeader from '../components/Header/DrawerHeader';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{header: DrawerHeader}}
      />
      <Tab.Screen name="Category" component={CategoriesScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}
