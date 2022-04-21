import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';

import AllProducts from '../components/AllProducts';
import HomeScreenCarousel from '../components/Carousels/HomeScreenCarousel';
import HorizontalList from '../components/HorizontalList';
import GradientBackgroundItem from '../components/HorizontalList/GradientBackgroundItem';
import LogoBackgroundItem from '../components/HorizontalList/LogoBackgroundItem';
import ProductItem from '../components/HorizontalList/ProductItem';

import SearchBox from '../components/SearchBox';
import {gradient} from '../config/colors';

export default function HomeScreen() {
  const categories = [
    {key: 1, text: 'Woman', colors: gradient.blue},
    {key: 2, text: 'Man', colors: gradient.red},
    {key: 3, text: 'Kids', colors: gradient.green},
    {key: 4, text: 'Recent', colors: gradient.blue},
    {key: 5, text: 'All', colors: gradient.red},
  ];
  const brands = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const featuredProducts = [
    {
      title: 'Product 4',
      price: '27.00',
      image: require('../assets/products/product_4.jpg'),
    },
    {
      title: 'Product 1',
      price: '34.00',
      image: require('../assets/products/product_1.jpg'),
    },
    {
      title: 'Product 3',
      price: '27.00',
      image: require('../assets/products/product_3.jpg'),
    },
    {
      title: 'Product 2',
      price: '29.00',
      image: require('../assets/products/product_2.jpg'),
    },
  ];

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <SearchBox />
        <HomeScreenCarousel />

        {/* categories */}
        <HorizontalList
          title={'Shop by Category'}
          data={categories}
          renderItem={category => <GradientBackgroundItem {...category} />}
        />

        {/* brands */}
        <HorizontalList
          title={'Shop by Brand'}
          data={brands}
          renderItem={item => (
            <LogoBackgroundItem
              key={item}
              logo={require('../assets/brands/brand_1.png')}
            />
          )}
        />

        {/* featured products */}
        <HorizontalList
          title={'Featured'}
          data={featuredProducts}
          renderItem={item => (
            <ProductItem
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          )}
        />

        {/* best sellers */}
        <HorizontalList
          title={'Best Sellers'}
          data={[...featuredProducts].reverse()}
          renderItem={item => (
            <ProductItem
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          )}
        />
        {/* <AllProducts products={featuredProducts} /> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    // overflow: 'visible',
  },
});
