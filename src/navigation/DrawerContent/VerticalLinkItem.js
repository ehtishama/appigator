import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../../config/colors';
import {defaultStyles} from '../../styles';

export default function VerticalLinkItem({title, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={[defaultStyles.textLight]}>{title}</Text>
        <Icon name="right" color={colors.WHITE} size={16} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: colors.BORDER_ON_DARK,
    borderBottomWidth: 1,
  },
});
