import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {dummyData} from '../../api/dummyData';
import HomeScreenCarousel from '../../components/Carousels/HomeScreenCarousel';
import HorizontalList from '../../components/HorizontalList';
import GradientBackgroundItem from '../../components/HorizontalList/GradientBackgroundItem';
import IconItem from '../../components/HorizontalList/IconItem';
import ListHeader from '../../components/HorizontalList/ListHeader';
import LogoBackgroundItem from '../../components/HorizontalList/LogoBackgroundItem';
import ProductItem from '../../components/HorizontalList/ProductItem';
import SearchBox from '../../components/SearchBox';

export default function HomeScreenListHeader() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SearchBox />

      <HomeScreenCarousel />

      {/* categories => item with gradient BG */}
      {/* <HorizontalList
        title={'Shop by Category'}
        data={dummyData.categories}
        renderItem={category => <GradientBackgroundItem {...category} />}
        onSeeAll={f => f}
      /> */}

      {/* categories => item with an icon in it */}
      <HorizontalList
        title={'Shop by Category'}
        data={dummyData.categories}
        renderItem={category => (
          <IconItem
            key={category.id}
            icon={<Icon name="shoppingcart" size={44} />}
            title={category.text}
            onPress={f => f}
          />
        )}
        onSeeAll={() => navigation.navigate('CategoriesScreen')}
      />

      {/* brands => moved to HomeScreenFooter */}
      {/* <HorizontalList
        title={'Shop by Brand'}
        data={dummyData.brands}
        renderItem={item => (
          <LogoBackgroundItem
            key={item}
            logo={require('../assets/brands/brand_1.png')}
          />
        )}
        onSeeAll={f => f}
      /> */}

      {/* featured products */}
      <HorizontalList
        title={'Featured'}
        data={dummyData.products}
        renderItem={item => (
          <ProductItem
            key={item.title}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        )}
        onSeeAll={() => navigation.navigate('ProductsScreen')}
      />

      {/* best sellers */}
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

      {/* All Products  */}
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