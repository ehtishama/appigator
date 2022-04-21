import {Text, View, StyleSheet, Dimensions, Image} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const currency = '$';
export default function ProductItem({title, price, image}) {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <Image source={image} style={styles.image} />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
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
    width: 160,
    borderRadius: 6,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
    elevation: 4,
  },
  title: {
    fontWeight: '700',
    fontSize: 16,
  },
  price: {
    fontWeight: '600',
  },
});
