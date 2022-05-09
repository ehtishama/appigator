import React from 'react';
import 'react-native-gesture-handler';
import {AppRegistry, Text} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
AppRegistry.registerComponent(appName, () => App);
