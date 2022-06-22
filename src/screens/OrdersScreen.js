import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import OrderItem from '../components/OrderItem';
import EmptyListPlaceHolder from '../components/EmptyListPlaceHolder';
import {colors} from '../config/colors';

const dummyOrders = [...Array(1)];

export default function OrdersScreen() {
  const navigation = useNavigation();

  return dummyOrders.length === 0 ? (
    <EmptyListPlaceHolder
      title={'You have not placed any orders yet.'}
      subTitle={'All your orders will be available here'}
      actionTitle={'Shop Now'}
      onPress={f => f}
      icon={
        <MaterialCommunityIcon
          name="cart-remove"
          size={56}
          color={colors.LOGO_COLOR}
        />
      }
    />
  ) : (
    <ScrollView style={styles.container}>
      {dummyOrders.map((_, idx) => (
        <OrderItem
          key={idx}
          onPress={() => navigation.navigate('OrderDetailsScreen')}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
