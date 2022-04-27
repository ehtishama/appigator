import React, {useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, StyleSheet, Image, TouchableOpacity, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Badge} from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';

import {dummyData} from '../../api/dummyData';
import HorizontalList from '../../components/HorizontalList';
import ProductItem from '../../components/HorizontalList/ProductItem';
import QuantityCounter from '../../components/QuantityCounter';
import {colors} from '../../config/colors';
import {defaultStyles} from '../../styles';
import ProductProperty from '../../components/ProductProperty';
import CartConfirmationPopup from '../../components/CartConfirmationPopup';
import BottomBarButton from '../../components/BottomBarButton';

export default function ProductDetailsScreen() {
  const navigation = useNavigation();
  const {
    params: {product},
  } = useRoute();

  // UI state
  const [productQuantity, setProductQuantity] = useState(1);
  const [cartPopPupVisible, setCartPopupVisible] = useState(false);

  const handleCart = () => {
    setCartPopupVisible(!cartPopPupVisible);
  };

  const handleCheckout = () => {};

  const handleShopping = () => {};

  return (
    <>
      <ScrollView style={styles.container}>
        {/* banner */}
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

        {/* title and price section */}
        <View style={styles.header}>
          <Text style={styles.title}>{product.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>${product.price}</Text>
            <Text style={styles.oldPrice}>
              ${(Number(product.price) + 10.99).toFixed(2)}
            </Text>
          </View>
        </View>

        {/* selectable product properties */}
        {dummyData.productProperties.map(property => (
          <ProductProperty
            key={property.title}
            title={property.title}
            possibleValues={property.values}
          />
        ))}

        {/* quantity */}
        <QuantityCounter
          value={productQuantity}
          onChange={n => setProductQuantity(n)}
        />

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
              navigation.navigate('ProductsScreen', {
                title: 'Featured Products',
              })
            }
          />
        </View>

        {/* description */}
        <View style={styles.description}>
          <Text style={[defaultStyles.bold, defaultStyles.subTitle]}>
            Description
          </Text>
          <Text>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus
            libero culpa amet nisi distinctio obcaecati, enim praesentium itaque
            qui nihil unde, est perferendis aspernatur, excepturi possimus quam?
            Eveniet, ab minima? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ab laudantium vel beatae. Dolor assumenda hic
            libero nostrum eaque. Illum exercitationem laudantium, commodi sunt
            porro iste omnis veniam natus ratione cum!
          </Text>
          <Image
            style={{width: '100%', height: 360, marginVertical: 14}}
            source={product.image}
          />

          <Image
            style={{width: '100%', height: 360, marginVertical: 14}}
            source={product.image}
          />
        </View>
      </ScrollView>

      {/* Add to cart */}
      <BottomBarButton
        title={'Add To Cart'}
        subTitle={`$${product.price}`}
        onPress={handleCart}
      />

      {/* overlay modal */}
      <CartConfirmationPopup
        visible={cartPopPupVisible}
        product={product}
        quantity={productQuantity}
        onClose={() => setCartPopupVisible(!cartPopPupVisible)}
        onCheckout={handleCheckout}
        onContinueShopping={handleShopping}
      />
    </>
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
  relatedProductsContainer: {
    marginVertical: 20,
  },
  description: {
    paddingHorizontal: 16,
  },
});
