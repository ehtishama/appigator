import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  StatusBar,
  Linking,
} from 'react-native';

import Address from '../components/Address';
import SelectPaymentMethod from '../components/SelectPaymentMethod';
import CartItem from '../components/CartItem';
import Icon from 'react-native-vector-icons/AntDesign';
import {colors} from '../config/colors';
import BottomBarButton from '../components/BottomBarButton';
import OrderSummary from '../components/OrderSummary';
import Screen from '../components/Screen';
export default function OrderConfirmationScreen() {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Address />
        <SelectPaymentMethod />
        <View style={styles.cart}>
          <View style={styles.cartHeader}>
            <Icon name={'shoppingcart'} size={30} />
            <Text style={styles.headerText}>Product in cart</Text>
          </View>
          <CartItem backgroundColor={colors.WHITE} />
        </View>
        <OrderSummary />
        <View style={styles.policyContainer}>
          <Text style={styles.policyText}>
            Upon clicking "Pay Now", I confirm I have read and acknowledged all
            <Text
              style={styles.textLink}
              onPress={() => Linking.openURL('https://www.google.com')}>
              {' '}
              terms & policies.
            </Text>
          </Text>
        </View>
      </ScrollView>
      <BottomBarButton title={'Pay Now'} subTitle={'$32.00'} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cart: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    padding: 16,
    marginBottom: 8,
  },
  cartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    flex: 1,
    marginHorizontal: 6,
    color: colors.DARK_100,
  },
  policyContainer: {
    paddingHorizontal: 16,
    paddingVertical: 18,
    backgroundColor: colors.LIGHT_BACKGROUND,
  },
  textLink: {
    color: colors.LOGO_COLOR,
    fontWeight: '600',
  },
});
