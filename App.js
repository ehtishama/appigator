import React from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {AppTheme} from './src/config/theme';
import StackNavigator from './src/navigation/StackNavigator';
import {persistor, store} from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <NavigationContainer theme={AppTheme}>
          <StackNavigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
