import {View, StyleSheet} from 'react-native';
import React from 'react';
import SelectionItem from './SelectionItem';

import {colors} from '../../../config/colors';

export default function HorizontalSelectionList({options, selected, onSelect}) {
  return (
    <View style={styles.container}>
      {options.map(option => (
        <SelectionItem
          key={option.id}
          onSelect={() => onSelect(option)}
          title={option.title}
          selected={option.id === selected}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.DARK_200,
    paddingVertical: 8,
  },
});
