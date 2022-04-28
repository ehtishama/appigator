import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {RadioButton} from 'react-native-paper';
import {colors} from '../config/colors';

export default function PaymentMehodItem({icon, text, onPress, selected}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <RadioButton
          color={colors.LOGO_COLOR}
          status={selected ? 'checked' : 'unchecked'}
          onPress={onPress}
        />
        {icon}
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginBottom: 8,
    backgroundColor: colors.LIGHT_BACKGROUND,
  },
  text: {
    color: colors.DARK_400,
    flex: 1,
    marginHorizontal: 8,
  },
});
