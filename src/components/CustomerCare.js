/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../config/colors';

export default function CustomerCare({icon, title, Msg, onPress, btnText}) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View style={[styles.userBackGround]}>{icon}</View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.msg}>{Msg}</Text>
      <TouchableOpacity style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor: colors.GRAY_COLOR,
    height: 200,
    elevation: 2,
    marginHorizontal: 16,
    marginBottom: 15,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.BLACK,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  msg: {
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    width: '79%',
  },
  btn: {
    borderColor: colors.RED_COLOR,
    borderWidth: 1,
    marginTop: 20,
    height: 45,
    width: 130,
    justifyContent: 'center',
  },
  text: {
    color: colors.RED_COLOR,
    alignItems: 'center',
    textAlign: 'center',
  },
});
