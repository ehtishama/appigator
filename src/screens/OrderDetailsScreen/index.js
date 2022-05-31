import React from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';

import Accordian from '../../components/Accordian';
import OrderedProductItem from '../../components/OrderedProductItem';
import OrderSummary from '../../components/OrderSummary';

import {colors} from '../../config/colors';
import CustomerInformationCard from './CustomerInformationCard';
import OrderConfirmedCard from './OrderConfirmedCard';

const dummyProducts = [
  {id: 1, title: 'LED High Tops', price: 89, quantity: 10},
  {id: 2, title: 'Man Shirt', price: 80, quantity: 20},
  {id: 3, title: 'Woman T-Shirt', price: 40, quantity: 30},
];

export default function OrderDetailsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Accordian title={'Order Summary'} subTitle="PKR 102.8">
        <View style={styles.accordianContainer}>
          {dummyProducts.map(product => (
            <OrderedProductItem key={product.id} {...product} />
          ))}
          <OrderSummary />
        </View>
      </Accordian>
      <OrderConfirmedCard />
      <CustomerInformationCard
        email={'naveed.ashfaq@unitedsol.net'}
        shippingAddress={{}}
        billingAddress={{}}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
  },

  accordianContainer: {
    borderWidth: 1,
    borderColor: colors.LIGHT,
    marginBottom: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
});
