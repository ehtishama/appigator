import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ADIcon from 'react-native-vector-icons/AntDesign';

import {dummyData} from '../api/dummyData';
import ProductItem from '../components/HorizontalList/ProductItem';
import OverlayModal from '../components/OverlayModal';
import SortBy from '../components/SortBy';

export default function ProductsScreen() {
  const navigation = useNavigation();

  // Set header title
  const {params: {title} = {title: 'Products'}} = useRoute();
  navigation.setOptions({title});

  // UI state
  const [sortModalOpen, setSortModalOpen] = useState(true);

  return (
    <View style={styles.container}>
      {/* header with filters  */}
      <View style={styles.header}>
        <Text style={styles.text}>Found (12) Products</Text>
        <View style={styles.actions}>
          <TouchableOpacity
            style={styles.action}
            onPress={() => setSortModalOpen(true)}>
            <Icon name="sort-amount-up-alt" size={25} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.action}>
            <ADIcon name="filter" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={dummyData.products}
        renderItem={({item}) => (
          <ProductItem
            title={item.title}
            image={item.image}
            price={item.price}
            style={styles.productItem}
            imageStyle={styles.productImage}
            onPress={() => console.log('pressed')}
          />
        )}
        keyExtractor={item => item.title}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
      />

      <OverlayModal visible={sortModalOpen}>
        <SortBy onClose={() => setSortModalOpen(false)} />
      </OverlayModal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  action: {
    padding: 10,
  },
  columnWrapperStyle: {
    marginHorizontal: 8,
  },
  productItem: {
    flex: 0.5,
    marginBottom: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  productImage: {
    width: '100%',
    height: 180,
  },
});
