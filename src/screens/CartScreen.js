import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {View, StyleSheet, FlatList} from 'react-native';

import {colors} from '../config/colors';
import {dummyData} from '../api/dummyData';
import CartItem from '../components/CartItem';
import HorizontalList from '../components/HorizontalList';
import BottomBarButton from '../components/BottomBarButton';
import ProductItem from '../components/HorizontalList/ProductItem';
import EmptyListPlaceHolder from '../components/EmptyListPlaceHolder';

export default function CartScreen() {
  const navigation = useNavigation();
  const data = [...Array(0)];

  const renderEmptyComponent = (
    <EmptyListPlaceHolder
      title={'Your cart is empty'}
      subTitle={'Looks like you have not added anything to your cart yet.'}
      icon={<Icon name="shopping-bag" size={72} color={colors.LOGO_COLOR} />}
      actionTitle={"Let's shop"}
      onPress={() => navigation.goBack()}
    />
  );

  const renderRelatedProducts = (
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
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={() => <CartItem />}
        ListFooterComponent={data.length && renderRelatedProducts}
        ListEmptyComponent={!data.length && renderEmptyComponent}
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
