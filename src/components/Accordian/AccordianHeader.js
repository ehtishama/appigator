import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../../config/colors';

export default function AccordianHeader({
  title,
  subTitle,
  isOpen = false,
  onPress,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{`${title} | ${subTitle}`}</Text>
        <MaterialIcon
          name={`${isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}`}
          size={32}
        />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
  },
});
