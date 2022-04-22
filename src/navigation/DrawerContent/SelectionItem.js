import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../config/colors';
import {defaultStyles} from '../../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function SelectionItem({selected, title, onSelect}) {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        {selected && <Icon name="checkcircle" size={16} color={colors.WHITE} />}
        <Text style={[defaultStyles.textLight, styles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,

    margin: 1,
  },
  text: {
    paddingHorizontal: 6,
  },
});
