import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

import {colors} from '../config/colors';

export default function Button({
  title,
  variant = 'primary',
  block,
  edgesRound = true,
  onPress,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text
        style={[
          styles.title,
          styles[variant],
          block && styles.block,
          edgesRound && styles.edgesRound,
        ]}>
        {title}
      </Text>
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
    paddingVertical: 16,
    marginTop: 8,
    fontWeight: 'bold',
    borderRadius: 4,
  },
  edgesRound: {borderRadius: 50},
  primary: {
    color: colors.WHITE,
    backgroundColor: colors.LOGO_COLOR,
  },
  outline: {
    borderWidth: 1,
    borderColor: colors.TEXT_LIGHT,
  },
  block: {
    width: '100%',
    textAlign: 'center',
  },
});
