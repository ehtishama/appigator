import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';

export default function CheckBoxListFooter() {
  const handleApply = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.action}>
        <Text>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.action, styles.actionMain]}
        onPress={handleApply}>
        <Text style={styles.mainText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 16,
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  action: {
    paddingVertical: 10,
    paddingHorizontal: 36,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '600',
  },
  actionMain: {
    backgroundColor: colors.LOGO_COLOR,
    borderWidth: 0,
  },
  mainText: {
    color: 'white',
    fontWeight: '600',
  },
});
