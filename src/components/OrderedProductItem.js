import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {colors} from '../config/colors';

export default function OrderedProductItem({title, price, quantity, imageUri}) {
  return (
    <TouchableOpacity onPress={f => f}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: imageUri}} />
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.price}>Price: {price}</Text>
          <Text style={styles.quantity}>Quantity: {quantity}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,

    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT,
  },
  image: {
    height: 85,
    width: 100,
    borderWidth: 1,
    borderColor: colors.LIGHT,
    marginRight: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  price: {
    fontSize: 16,
  },
  quantity: {
    fontSize: 16,
  },
});
