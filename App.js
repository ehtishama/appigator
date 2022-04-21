import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import BottomTabNavigator from './src/navigation/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BottomTabNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
