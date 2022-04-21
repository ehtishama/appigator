import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import MDIcon from 'react-native-vector-icons/MaterialCommunityIcons';

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
        options={{
          header: DrawerHeader,
          tabBarIcon: props => <Icon name="home" {...props} />,
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoriesScreen}
        options={{tabBarIcon: props => <Icon name="bars" {...props} />}}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{tabBarIcon: props => <MDIcon name="account" {...props} />}}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{tabBarIcon: props => <MDIcon name="headphones" {...props} />}}
      />
    </Tab.Navigator>
  );
}
