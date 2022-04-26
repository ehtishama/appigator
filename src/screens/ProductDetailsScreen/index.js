import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {ScrollView, TextInput} from 'react-native-gesture-handler';
import {Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import {dummyData} from '../../api/dummyData';
import HorizontalList from '../../components/HorizontalList';
import ProductItem from '../../components/HorizontalList/ProductItem';

import {colors} from '../../config/colors';
import {defaultStyles} from '../../styles';

export default function ProductDetailsScreen() {
  const navigation = useNavigation();
  const {
    params: {product},
  } = useRoute();

  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Image style={styles.bannerImage} source={product.image} />
        <TouchableOpacity style={styles.bannerAction}>
          <Icon name="hearto" size={30} />
        </TouchableOpacity>

        <Badge
          selectionColor={colors.LOGO_COLOR}
          style={[styles.badge, styles.stockIndicator]}>
          In Stock
        </Badge>
        <Badge
          selectionColor={colors.LOGO_COLOR}
          style={[styles.badge, styles.pagination]}>
          (1/7)
        </Badge>
      </View>

      {/* title section */}
      <View style={styles.header}>
        <Text style={styles.title}>{product.title}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.oldPrice}>${Number(product.price) + 10.99}</Text>
        </View>
      </View>

      {/* quantity */}
      <View style={styles.productOption}>
        <Text style={styles.optionTitle}>Quantity</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.action}>
            <Text>-</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="quantity"
            value="1"
            style={styles.quantityInput}
          />
          <TouchableOpacity style={styles.action}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* shipping */}
      <View style={styles.productOption}>
        <Text style={styles.optionTitle}>Shipping</Text>
        <View style={defaultStyles.flexRow}>
          <Text style={[defaultStyles.mx_sm, defaultStyles.bold]}>$0.50</Text>
          <Text>(via Cainiao Economy Global)</Text>
        </View>
      </View>

      {/* related products */}
      <View style={styles.relatedProductsContainer}>
        <HorizontalList
          title={'Related Products'}
          data={dummyData.products}
          renderItem={item => (
            <ProductItem
              key={item.title}
              title={item.title}
              price={item.price}
              image={item.image}
            />
          )}
          onSeeAll={() =>
            navigation.navigate('ProductsScreen', {title: 'Featured Products'})
          }
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bannerImage: {
    height: 260,
    width: '100%',
    resizeMode: 'contain',
    backgroundColor: colors.LIGHT,
  },
  bannerAction: {
    position: 'absolute',
    right: 4,
    top: 4,
    padding: 12,
  },
  badge: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    paddingHorizontal: 10,
    color: colors.LOGO_COLOR,
    fontSize: 12,
    position: 'absolute',
  },
  stockIndicator: {
    bottom: 10,
    left: 10,
  },
  pagination: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    color: colors.BLACK,
  },
  header: {
    paddingVertical: 18,
    paddingHorizontal: 16,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: colors.LIGHT,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 22,
    fontWeight: '600',
    color: colors.LOGO_COLOR,
    marginRight: 8,
  },

  oldPrice: {
    textDecorationLine: 'line-through',
    fontSize: 18,
  },
  productOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.LIGHT,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  quantityInput: {
    padding: 0,
    borderWidth: 1,
    borderColor: colors.LIGHT,
    width: 60,
    textAlign: 'center',
  },
  action: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.LIGHT,
  },
  relatedProductsContainer: {
    marginVertical: 20,
  },
});
