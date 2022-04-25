import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ServicesList({icon, title, onPress, backgroundColor}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={[styles.userBackGround, {backgroundColor}]}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  userBackGround: {
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  title: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 13,
    textAlign: 'center',
    width: 65,
    marginTop: 7,
  },
});
