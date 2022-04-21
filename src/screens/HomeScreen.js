import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {dummyData} from '../api/dummyData';
import AllProducts from '../components/AllProducts';
import HomeScreenHeader from './HomeScreenHeader';
import HomeScreenListFooter from './HomeScreenListFooter';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <AllProducts
        products={dummyData.products}
        ListHeaderComponent={HomeScreenHeader}
        ListFooterComponent={HomeScreenListFooter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
