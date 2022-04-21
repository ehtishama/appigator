import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function ListHeader({title}) {
  return (
    <View style={styles.header}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <TouchableOpacity>
        <Text style={styles.textLight}>See All</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.TEXT,
    flex: 1,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textLight: {
    color: colors.TEXT_LIGHT,
    fontWeight: '600',
    padding: 8,
  },
});
