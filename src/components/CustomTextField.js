import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

export default function CustomTextField({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput style={styles.textInput} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    paddingHorizontal: 18,
    padding: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 15,
  },
  textInput: {
    backgroundColor: 'rgb(247,247,247)',
    height: 50,
    elevation: 3,
    marginTop: 10,
  },
});
