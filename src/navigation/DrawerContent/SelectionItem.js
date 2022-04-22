import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../config/colors';

export default function SelectionItem({selected, title}) {
  return (
    <View style={styles.container}>
      {selected && <Icon name="checkbox" size={30} color={colors.WHITE} />}
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({container: {alignItems: 'center'}});
