import React from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
export default function CategoriesScreen(params) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
