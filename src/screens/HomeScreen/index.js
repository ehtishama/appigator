import React from 'react';
import {StyleSheet} from 'react-native';

import {dummyData} from '../../api/dummyData';
import ProductsList from '../../components/ProductsList';
import Screen from '../../components/Screen';
import HomeScreenListHeader from './HomeScreenHeader';
import HomeScreenListFooter from './HomeScreenListFooter';

export default function HomeScreen() {
  return (
    <Screen>
      <ProductsList
        products={dummyData.products}
        ListHeaderComponent={HomeScreenListHeader}
        ListFooterComponent={HomeScreenListFooter}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
