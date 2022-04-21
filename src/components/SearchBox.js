import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {colors} from '../config/colors';
export default function SearchBox() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon name="search" size={30} />
      </View>
      <TextInput placeholder="Search Your Product" style={styles.input} />
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
    marginHorizontal: 16,
    elevation: 14,
  },
  icon: {
    borderRightWidth: 1,
    borderRightColor: colors.LIGHT,
    paddingRight: 6,
  },
  input: {
    marginLeft: 6,
    flex: 1,
  },
});
