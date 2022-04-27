import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
    marginTop: 30,
    backgroundColor: 'rgb(247,247,247)',
    height: 200,
    elevation: 2,
    marginHorizontal: 16,
    paddingHorizontal: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 5,
  },
  msg: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 20,
    textAlign: 'center',
    width: '79%',
  },
  btn: {
    borderColor: 'red',
    borderWidth: 1,
    marginTop: 20,
    height: 45,
    width: 130,
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    alignItems: 'center',
    textAlign: 'center',
  },
});
