import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {colors} from '../../../config/colors';

export default function CarouselItem() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/products/product_1.jpg')}
        style={styles.bannerImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9E5E6',
    borderRadius: 3,
  },
  bannerImage: {
    width: '100%',
    resizeMode: 'contain',
  },
});
