import {combineReducers} from '@reduxjs/toolkit';
import authReducer from './authReducer';
import settingsReducer from './settingsReducer';

export const rootReducer = combineReducers({
  auth: authReducer,
  settings: settingsReducer,
});
