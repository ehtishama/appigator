import {Text, View, StyleSheet, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';

const currency = '$';
export default function ProductItem({title, price, image}) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.price}>{`${currency}${price}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 22,
    alignItems: 'center',
    justifyContent: 'center',
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
  title: {
    fontWeight: '700',
    fontSize: 16,
    flex: 1,
  },
  price: {
    fontWeight: '600',
  },
});
