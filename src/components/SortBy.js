import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import {dummyData} from '../api/dummyData';
import {colors} from '../config/colors';
import {defaultStyles} from '../styles';

export default function SortBy({onClose}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Sort By</Text>
        <TouchableOpacity onPress={onClose} style={defaultStyles.action}>
          <Icon
            name="closecircle"
            size={25}
            color={colors.LOGO_COLOR}
            backgroundColor={'transparent'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        {dummyData.sortBy.map(type => (
          <TouchableOpacity style={styles.item}>
            {/* radio button here */}
            <Text>{type.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 4,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.LIGHT,
    paddingVertical: 8,
  },

  title: {
    fontWeight: '600',
    fontSize: 20,
  },
  item: {
    paddingVertical: 16,
    borderColor: colors.LIGHT,
    borderBottomWidth: 1,
  },
});
