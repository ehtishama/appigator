import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {defaultStyles} from '../styles';
import {colors} from '../config/colors';

export default function BottomBarButton({title, subTitle, onPress}) {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>{subTitle}</Text>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={[defaultStyles.textLight, defaultStyles.bold]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: colors.LIGHT,
  },
  button: {
    backgroundColor: colors.LOGO_COLOR,
    paddingHorizontal: 26,
    paddingVertical: 12,
    borderRadius: 20,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.LOGO_COLOR,
    marginRight: 8,
  },
});
