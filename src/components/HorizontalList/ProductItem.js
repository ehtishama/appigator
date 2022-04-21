import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';

const currency = '$';
export default function ProductItem({title, price, image, style}) {
  return (
    <View style={[styles.container, style]}>
      <TouchableOpacity style={styles.imgContainer}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.price}>{`${currency}${price}`}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 140,
    borderRadius: 6,
    height: 160,
    resizeMode: 'center',
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: colors.LIGHT,
  },
  content: {},
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  price: {
    fontWeight: '600',
  },
});
