import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {colors} from '../config/colors';

export default function SubCategoryItem({
  title,
  image,
  wrapperStyle,
  imageStyle,
}) {
  return (
    <View style={[styles.container, wrapperStyle]}>
      <TouchableOpacity style={styles.touchable}>
        <View style={styles.imageContainer}>
          <Image source={image} style={[styles.image, imageStyle]} />
        </View>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 16,
  },
  touchable: {
    width: '100%',
  },
  imageContainer: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    width: '100%',
    minHeight: 100,
  },
  image: {
    width: '100%',
    height: 80,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 5,
    fontSize: 14,
  },
});
