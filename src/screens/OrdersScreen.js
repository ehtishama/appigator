import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import OrderItem from '../components/OrderItem';

export default function OrdersScreen() {
  return (
    <ScrollView style={styles.container}>
      {[...Array(4)].map((_, idx) => (
        <OrderItem key={idx} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({container: {flex: 1}});
