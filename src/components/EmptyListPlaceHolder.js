import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
// import Button from './Button';
import {colors} from '../config/colors';
import {Button} from 'react-native-paper';

export default function EmptyListPlaceHolder({
  icon,
  title,
  subTitle,
  actionTitle,
  onPress,
}) {
  return (
    <View style={styles.container}>
      {icon}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>

      <Button
        mode="outlined"
        color={colors.LOGO_COLOR}
        onPress={onPress}
        style={styles.button}>
        {actionTitle}
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    color: colors.DARK_400,
    fontWeight: '500',
    marginTop: 16,
  },
  subTitle: {
    textAlign: 'center',
    marginTop: 4,
    maxWidth: 260,
  },
  button: {
    marginTop: 24,
    borderColor: colors.LOGO_COLOR,
  },
});
