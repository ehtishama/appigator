import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';

export default function IconItem({icon, title}) {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{icon}</View>
      <Text style={styles.text}>{title}</Text>
    </View>
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
  },
});
