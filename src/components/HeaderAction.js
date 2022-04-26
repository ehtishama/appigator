import React from 'react';
import {TouchableOpacity} from 'react-native';

export default function HeaderAction({icon, onPress}) {
  return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
}
