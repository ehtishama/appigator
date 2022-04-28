import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../config/colors';

export default function Button({title, variant = 'primary', onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={[styles.title, styles[variant]]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 50,
    marginTop: 8,
    fontWeight: 'bold',
  },
  primary: {
    color: colors.WHITE,
    backgroundColor: colors.LOGO_COLOR,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.TEXT_LIGHT,
  },
});
