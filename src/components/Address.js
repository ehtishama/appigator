import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {dummyData} from '../api/dummyData';
import {colors} from '../config/colors';
export default function Address({userInfo = dummyData.userInfo}) {
  const {
    address: {line1, line2, city, country, postalCode},
  } = userInfo;

  return (
    <View style={styles.container}>
      <Icon name="location" size={35} />
      <View style={styles.content}>
        <Text style={styles.name}>{userInfo.fullName}</Text>
        <Text>{`${line1}, \n${line2}, \n${city}, ${country}, ${postalCode}`}</Text>
        <Text>{userInfo.phone}</Text>
      </View>
      <TouchableOpacity style={styles.action}>
        <Text style={styles.actionText}>Edit</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    borderBottomColor: colors.LIGHT_BACKGROUND,
    borderBottomWidth: 2,
  },
  content: {
    flex: 1,
    marginHorizontal: 4,
  },
  action: {
    marginLeft: 'auto',
  },
  actionText: {
    color: colors.LOGO_COLOR,
    borderBottomColor: colors.LOGO_COLOR,
    borderBottomWidth: 1,
  },
  name: {
    fontSize: 16,
    color: colors.BLACK,
    marginBottom: 4,
  },
});
