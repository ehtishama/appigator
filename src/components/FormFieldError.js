import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FormFieldError({text}) {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 10},
  error: {color: 'brown'},
});
