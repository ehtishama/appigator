import {Text, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';

const itemWidth = Dimensions.get('window').width / 3 - 10;

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
    width: 200,
    height: 100,
    resizeMode: 'contain',
  },
});
