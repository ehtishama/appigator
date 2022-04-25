import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function AccounOrder({icon, title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {icon}
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginBottom: 16,
  },
  title: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 13,
    marginTop: 7,
  },
});
