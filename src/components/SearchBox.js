import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {colors} from '../config/colors';
export default function SearchBox({iconOnRight = false, inputStyle = {}}) {
  return (
    <View style={styles.container}>
      {!iconOnRight && (
        <View style={styles.icon}>
          <Icon name="search" size={25} color={colors.BLACK} />
        </View>
      )}
      <TextInput
        placeholder="Search Your Product"
        style={[styles.input, inputStyle]}
      />
      {iconOnRight && (
        <View style={styles.iconOnRight}>
          <Icon name="search" size={25} color={colors.BLACK} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginHorizontal: 12,
    borderWidth: 1,
    borderColor: colors.LIGHT,
  },
  icon: {
    borderRightWidth: 1,
    borderRightColor: colors.LIGHT,
    paddingRight: 6,
  },
  iconOnRight: {
    borderLeftWidth: 1,
    borderLeftColor: colors.LIGHT,
    paddingLeft: 6,
  },
  input: {
    marginLeft: 6,
    flex: 1,
  },
});
