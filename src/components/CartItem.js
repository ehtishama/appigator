import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '../config/colors';
import Counter from './Counter';

export default function CartItem({onPress, backgroundColor}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.container, {backgroundColor}]}
        onPress={onPress}>
        <Image
          style={styles.image}
          source={require('../assets/products/product_1.jpg')}
        />
        <View style={styles.content}>
          <Text style={styles.productTitle} numberOfLines={1}>
            Men Shirt
          </Text>
          <Text numberOfLines={1}>Medium, Blue</Text>
          <Text style={styles.price}>$32</Text>
          <Counter value={1} />
        </View>
        <TouchableOpacity style={styles.action}>
          <Icon name="trash-can-outline" size={25} />
        </TouchableOpacity>
      </TouchableOpacity>
      {/* <View>
        <Text>Product Total</Text>
        <Text>$ 32.00</Text>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: colors.LIGHT,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: '100%',
    resizeMode: 'cover',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  action: {
    position: 'absolute',
    right: 8,
    top: 8,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    marginVertical: 6,
    fontSize: 22,
    color: colors.LOGO_COLOR,
  },
});
