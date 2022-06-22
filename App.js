import {Provider} from 'react-redux';
import React, {useEffect} from 'react';
import {LogBox, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {PersistGate} from 'redux-persist/integration/react';

import {AppTheme} from './src/config/theme';
import {persistor, store} from './src/redux/store';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  useEffect(() => {
    LogBox.ignoreLogs([
      "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
      'NativeBase: The contrast ratio of',
      "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
    ]);
  }, []);

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
