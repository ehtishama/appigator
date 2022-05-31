import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../config/colors';
import Counter from './Counter';

export default function QuantityCounter({
  value = 1,
  min = 1,
  onChange = f => f,
}) {
  return (
    <View style={styles.productOption}>
      <Text style={styles.optionTitle}>Quantity</Text>
      <Counter {...{value, onChange, min}} />
    </View>
  );
}

const styles = StyleSheet.create({
  productOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.LIGHT,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
});
