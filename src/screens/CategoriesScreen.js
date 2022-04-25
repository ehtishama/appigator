import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import {dummyData} from '../api/dummyData';
import HorizontalList from '../components/HorizontalList';
import IconItem from '../components/HorizontalList/IconItem';
import ProductItem from '../components/HorizontalList/ProductItem';
import {colors} from '../config/colors';

export default function CategoriesScreen(params) {
  const [selectedCategoryId, setSelectedCategoryId] = useState(1);

  return (
    <View style={styles.container}>
      {/* category selector */}
      <View style={styles.listContainer}>
        <HorizontalList
          title={'Categories'}
          data={dummyData.categories}
          renderItem={category => (
            <IconItem
              key={category.id}
              title={category.text}
              icon={<Icon name="home" size={30} />}
              selected={category.id === selectedCategoryId}
              onPress={() => setSelectedCategoryId(category.id)}
            />
          )}
        />
      </View>
      {/* sub categories */}
      <View>
        <Text>Apparel for Men</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: colors.LIGHT,
    paddingTop: 16,
  },
});
