import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../config/colors';

export default function ProductProperty({
  title,
  possibleValues = [],
  // selectedIdx = 0,
}) {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.valuesContainer}>
        {possibleValues.map((value, idx) => (
          <TouchableOpacity
            style={styles.valueContanier}
            key={value}
            onPress={() => setSelectedIdx(idx)}>
            <Text
              style={[styles.value, idx === selectedIdx && styles.selected]}>
              {value}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: colors.LIGHT,
    borderBottomWidth: 2,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  valuesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  value: {
    borderWidth: 1,
    borderColor: colors.LIGHT,
    paddingVertical: 4,
    paddingHorizontal: 10,
    marginHorizontal: 2,
  },
  selected: {
    color: colors.LOGO_COLOR,
    borderColor: colors.LOGO_COLOR,
    // borderWidth: 2,
    fontWeight: '600',

    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
