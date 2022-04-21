import {Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';

const itemWidth = Dimensions.get('window').width / 3 - 10;

export default function GradientBackgroundItem({text}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#62AFFA',
    minWidth: itemWidth,
    minHeight: 60,
    borderRadius: 6,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: colors.WHITE,
  },
});
