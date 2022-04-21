import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalList from '../components/HorizontalList';
import {dummyData} from '../api/dummyData';
import LogoBackgroundItem from '../components/HorizontalList/LogoBackgroundItem';
import {colors} from '../config/colors';
import {TouchableOpacity} from 'react-native-gesture-handler';
import WhyBuyFromUs from '../components/WhyBuyFromUs';

export default function HomeScreenListFooter() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.viewAll}>
        <Text>View all products</Text>
      </TouchableOpacity>

      <HorizontalList
        title={'Shop by Brand'}
        listStyles={styles.list}
        data={dummyData.brands}
        renderItem={item => (
          <LogoBackgroundItem
            key={item}
            logo={require('../assets/brands/brand_1.png')}
          />
        )}
      />

      <WhyBuyFromUs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  list: {
    backgroundColor: colors.CARD_BACKGROUND,
    paddingTop: 26,
    paddingBottom: 26,
    marginTop: 10,
  },
  viewAll: {
    marginTop: 16,
    marginBottom: 32,
    padding: 8,
    backgroundColor: colors.LIGHT,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 4,
    width: 250,
  },
});
