import {StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';

export default function LogoBackgroundItem({logo}) {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={logo} style={styles.image} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    borderRadius: 6,
    marginRight: 16,
    paddingHorizontal: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 70,
    resizeMode: 'contain',
  },
});
