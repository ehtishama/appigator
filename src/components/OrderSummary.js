import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import React from 'react';
import {colors} from '../config/colors';

export default function OrderSummary() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Icon name="clipboard" size={30} />
        <Text style={styles.title}>Order Summary</Text>
        <Text> (1 item) </Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>Order total</Text>
        <Text>$32.00</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text>Shipping</Text>
        <Text>$0.00</Text>
      </View>
      <View style={styles.summaryItem}>
        <Text style={styles.grandTotal}>Grand Total</Text>
        <Text style={styles.grandTotal}>$32.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: colors.DARK_300,
    marginLeft: 8,
  },
  summaryItem: {
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grandTotal: {
    fontSize: 18,
    color: colors.DARK_400,
  },
});
