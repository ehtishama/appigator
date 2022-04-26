import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';

import {colors} from '../config/colors';

export default function SortByItem({id, title, checkedId, onPress}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <RadioButton
        color={colors.LOGO_COLOR}
        status={checkedId === id ? 'checked' : 'unchecked'}
        onPress={onPress}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 8,
    borderColor: colors.LIGHT_BACKGROUND,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
