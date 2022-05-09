import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, FlatList} from 'react-native';

import {dummyData} from '../api/dummyData';
import BottomBarButton from '../components/BottomBarButton';
import CartItem from '../components/CartItem';
import HorizontalList from '../components/HorizontalList';
import ProductItem from '../components/HorizontalList/ProductItem';
import {colors} from '../config/colors';

export default function CartScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FlatList
        data={[...Array(3)]}
        renderItem={() => <CartItem />}
        ListFooterComponent={
          <View style={styles.relatedProductsContainer}>
            <HorizontalList
              title={'Related Products'}
              data={dummyData.products}
              renderItem={item => (
                <ProductItem
                  key={item.title}
                  title={item.title}
                  price={item.price}
                  image={item.image}
                />
              )}
              onSeeAll={() =>
                navigation.navigate('ProductsScreen', {
                  title: 'Featured Products',
                })
              }
            />
          </View>
        }
      />
      <BottomBarButton
        title={'Checkout'}
        subTitle={'$ 230.00'}
        onPress={() => navigation.navigate('OrderConfirmationScreen')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backfaceVisibility: 'red',
  },
  relatedProductsContainer: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    paddingVertical: 12,
    marginTop: 16,
  },
});
