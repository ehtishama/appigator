import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';
import CheckBoxItem from './CheckBoxItem';

export default function CheckBoxList({title, options}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={options}
        renderItem={({item}) => <CheckBoxItem title={item.title} />}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        listKey={title}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT,
    paddingBottom: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 8,
  },
  columnWrapperStyle: {paddingHorizontal: 0},
});
