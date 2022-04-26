import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {RadioButton} from 'react-native-paper';

import Icon from 'react-native-vector-icons/AntDesign';
import {dummyData} from '../api/dummyData';
import {colors} from '../config/colors';
import {defaultStyles} from '../styles';
import SortByItem from './SortByItem';

export default function SortBy({onClose}) {
  const [checkedOptionId, setCheckedOptionId] = useState(1);

  const handleCheck = id => {
    setCheckedOptionId(id);
  };

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
          <SortByItem
            key={type.id}
            id={type.id}
            title={type.title}
            checkedId={checkedOptionId}
            onPress={() => handleCheck(type.id)}
          />
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
    paddingVertical: 8,
    borderColor: colors.LIGHT_BACKGROUND,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
