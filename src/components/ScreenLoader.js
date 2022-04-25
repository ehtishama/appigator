import {View, ActivityIndicator} from 'react-native';
import React from 'react';
import {defaultStyles} from '../styles';
import {colors} from '../config/colors';

export default function ScreenLoader() {
  return (
    <View style={defaultStyles.centerXY}>
      <ActivityIndicator size={40} color={colors.LOGO_COLOR} />
    </View>
  );
}
