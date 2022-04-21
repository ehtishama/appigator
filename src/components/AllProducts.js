import {View, Text, StyleSheet, FlatList} from 'react-native';
import React from 'react';
import ProductItem from './HorizontalList/ProductItem';

export default function AllProducts({products = [], ListHeaderComponent}) {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductItem
          title={item.title}
          price={item.price}
          image={item.image}
          style={styles.item}
        />
      )}
      keyExtractor={item => item.title}
      numColumns={2}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    flex: 0.5,
    marginRight: 0,
    marginBottom: 20,
  },
});
