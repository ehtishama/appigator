import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import ProductItem from './HorizontalList/ProductItem';
import {FlatList} from 'react-native-gesture-handler';

export default function ProductsList({
  products = [],
  ListHeaderComponent,
  ListFooterComponent,
}) {
  return (
    <FlatList
      data={products}
      renderItem={({item}) => (
        <ProductItem
          title={item.title}
          price={item.price}
          image={item.image}
          style={styles.item}
          imageStyle={styles.productImage}
        />
      )}
      columnWrapperStyle={{marginLeft: 16}}
      keyExtractor={item => item.title}
      numColumns={2}
      ListHeaderComponent={ListHeaderComponent}
      ListFooterComponent={ListFooterComponent}
    />
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    flex: 0.5,
    marginRight: 18,
    marginBottom: 20,
  },
  productImage: {
    width: '100%',
    maxHeight: 600,
  },
});
