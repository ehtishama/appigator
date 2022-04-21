import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import HomeScreenCarousel from '../components/Carousels/HomeScreenCarousel';
import HorizontalList from '../components/HorizontalList';
import GradientBackgroundItem from '../components/HorizontalList/GradientBackgroundItem';
import LogoBackgroundItem from '../components/HorizontalList/LogoBackgroundItem';

import SearchBox from '../components/SearchBox';

export default function HomeScreen() {
  const categories = ['Woman', 'Man', 'Kids', 'All', 'Sport', 'Outfits'];
  const brands = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <SafeAreaView>
      <SearchBox />
      <ScrollView style={styles.container}>
        <HomeScreenCarousel />

        {/* categories */}
        <HorizontalList
          title={'Shop by Category'}
          data={categories}
          renderItem={item => <GradientBackgroundItem text={item} />}
        />

        {/* brands */}
        <HorizontalList
          title={'Shop by Brand'}
          data={brands}
          renderItem={item => (
            <LogoBackgroundItem logo={require('../assets/sample_logo.png')} />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
});
