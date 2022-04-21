import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppTheme} from './src/config/theme';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;
