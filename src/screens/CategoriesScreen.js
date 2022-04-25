import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';

import {dummyData} from '../api/dummyData';
import {fakePromise} from '../api/fakePromise';
import HorizontalList from '../components/HorizontalList';
import IconItem from '../components/HorizontalList/IconItem';
import ScreenLoader from '../components/ScreenLoader';
import SubCategoryItem from '../components/SubCategoryItem';
import {colors} from '../config/colors';
import {defaultStyles} from '../styles';

export default function CategoriesScreen() {
  const [selectedCategoryId, setSelectedCategoryId] = useState();
  const [loadingSubCats, setLoadingSubCats] = useState(false);

  const loadCategories = async catId => {
    setSelectedCategoryId(catId);

    setLoadingSubCats(true);
    await fakePromise(1000);
    setLoadingSubCats(false);
  };

  useEffect(() => {
    loadCategories(1);
  }, []);

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
              icon={category.icon}
              selected={category.id === selectedCategoryId}
              onPress={() => loadCategories(category.id)}
              wrapperStyle={{backgroundColor: colors.WHITE}}
            />
          )}
        />
      </View>

      {loadingSubCats ? (
        <ScreenLoader />
      ) : (
        <View style={styles.subCatContainer}>
          <Text style={[styles.subCatHeader, defaultStyles.subTitle]}>
            Apparel for Men
          </Text>
          <FlatList
            data={dummyData.subCategories}
            numColumns={3}
            renderItem={({item: subCat}) => (
              <SubCategoryItem
                title={subCat.text}
                image={subCat.image}
                wrapperStyle={styles.subCatItem}
              />
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    paddingTop: 16,
  },
  subCatContainer: {
    paddingHorizontal: 16,
    flex: 1,
  },
  subCatHeader: {
    marginVertical: 16,
  },
  subCatItem: {
    flex: 0.33,

    marginHorizontal: 3,
  },
});
