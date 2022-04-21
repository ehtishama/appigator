import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ProductItem from './HorizontalList/ProductItem';

export default function AllProducts({products = []}) {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductItem title={item.title} price={item.price} image={item.image} />
      )}
      keyExtractor={item => item.title}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({container: {}});
