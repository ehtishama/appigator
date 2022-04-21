import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreenCarousel from '../components/Carousels/HomeScreenCarousel';

import SearchBox from '../components/SearchBox';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <SearchBox />
      <HomeScreenCarousel />
    </SafeAreaView>
  );
}
