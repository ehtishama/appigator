import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';

export default function Screen({children}) {
  return (
    <View style={styles.container}>
      {children}
      <StatusBar backgroundColor={colors.WHITE} barStyle={'dark-content'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
