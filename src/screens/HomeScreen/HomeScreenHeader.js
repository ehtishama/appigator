import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';

import {dummyData} from '../../api/dummyData';
import SearchBox from '../../components/SearchBox';
import HorizontalList from '../../components/HorizontalList';
import IconItem from '../../components/HorizontalList/IconItem';
import ListHeader from '../../components/HorizontalList/ListHeader';
import ProductItem from '../../components/HorizontalList/ProductItem';
import HomeScreenCarousel from '../../components/Carousels/HomeScreenCarousel';
import {useSelector} from 'react-redux';

export default function HomeScreenListHeader() {
  const navigation = useNavigation();
  const settings = useSelector(state => state.settings) || {};

  const slider = settings['Elements Status']?.slider_status_on === '1';

  const categories =
    settings['Elements Status']?.categoryslider_status_on === '1';
  const bestSellers =
    settings['Elements Status']?.bestsaleproduct_status_on === '1';
  const popularProducts =
    settings['Elements Status']?.popularproduct_status_on === '1';
  const newProducts = settings['Elements Status']?.newproduct_status_on === '1';

  return (
    <View style={styles.container}>
      <SearchBox />

      {slider && <HomeScreenCarousel />}

      {/* categories => item with an icon in it */}
      {categories && (
        <HorizontalList
          title={'Shop by Category'}
          data={dummyData.categories}
          renderItem={category => (
            <IconItem
              key={category.id}
              icon={<Icon name="shoppingcart" size={44} />}
              title={category.text}
              onPress={() => navigation.navigate('CategoriesScreen')}
            />
          )}
          onSeeAll={() => navigation.navigate('CategoriesScreen')}
        />
      )}

      {/* popular products */}
      {popularProducts && (
        <HorizontalList
          title={'Popular Products'}
          data={dummyData.products}
          renderItem={item => (
            <ProductItem
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {product: item})
              }
            />
          )}
          onSeeAll={() =>
            navigation.navigate('ProductsScreen', {title: 'Featured Products'})
          }
        />
      )}

      {/* popular products */}
      {newProducts && (
        <HorizontalList
          title={'New Products'}
          data={dummyData.products}
          renderItem={item => (
            <ProductItem
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
              onPress={() =>
                navigation.navigate('ProductDetailsScreen', {product: item})
              }
            />
          )}
          onSeeAll={() =>
            navigation.navigate('ProductsScreen', {title: 'Featured Products'})
          }
        />
      )}

      {/* best sellers */}
      {bestSellers && (
        <HorizontalList
          title={'Best Sellers'}
          data={[...dummyData.products].reverse()}
          renderItem={item => (
            <ProductItem
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          )}
          onSeeAll={f => f}
        />
      )}

      {/* All Products header */}
      <ListHeader title={'All Products'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    marginBottom: 16,
  },
});
