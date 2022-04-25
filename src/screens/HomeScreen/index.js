import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {dummyData} from '../../api/dummyData';
import ProductsList from '../../components/ProductsList';
import HomeScreenListHeader from './HomeScreenHeader';
import HomeScreenListFooter from './HomeScreenListFooter';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <ProductsList
        products={dummyData.products}
        ListHeaderComponent={HomeScreenListHeader}
        ListFooterComponent={HomeScreenListFooter}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
