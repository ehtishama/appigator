import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';

import {dummyData} from '../../api/dummyData';
import ProductsList from '../../components/ProductsList';
import Screen from '../../components/Screen';
import {setSettings} from '../../redux/reducers/settingsReducer';
import HomeScreenListHeader from './HomeScreenHeader';
import HomeScreenListFooter from './HomeScreenListFooter';
import settingsApi from '../../api/settings';

export default function HomeScreen() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const {data: settings} = await settingsApi.getSettings();
      dispatch(setSettings(settings[0]));
    })();
  }, [dispatch]);

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
