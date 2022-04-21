import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreenCarousel from '../components/Carousels/HomeScreenCarousel';
import HorizontalList from '../components/HorizontalList';
import GradientBackgroundItem from '../components/HorizontalList/GradientBackgroundItem';

import SearchBox from '../components/SearchBox';

export default function HomeScreen() {
  const categories = ['Woman', 'Man', 'Kids', 'All', 'Sport', 'Outfits'];

  return (
    <SafeAreaView>
      <SearchBox />
      <HomeScreenCarousel />

      <HorizontalList
        title={'Shop by Category'}
        data={categories}
        renderItem={item => <GradientBackgroundItem text={item} />}
      />
    </SafeAreaView>
  );
}
