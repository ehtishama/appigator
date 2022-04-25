import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

import {colors} from '../../config/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {defaultStyles} from '../../styles';

export default function IconItem({
  icon,
  title,
  titleInside = false,
  selected,
  onPress,
  wrapperStyle,
}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View
        style={[
          styles.iconContainer,
          wrapperStyle,
          selected && defaultStyles.border_bottom,
        ]}>
        {icon}
        {titleInside && <Text style={styles.text}>{title}</Text>}
      </View>
      {!titleInside && <Text style={styles.text}>{title}</Text>}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  iconContainer: {
    width: 100,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.CARD_BACKGROUND,
    marginRight: 10,
    marginBottom: 6,
  },
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});
