import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppTheme} from './src/config/theme';

import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer theme={AppTheme}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default App;
