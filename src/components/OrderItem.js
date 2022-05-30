import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';
import {Badge} from 'react-native-paper';
import {defaultStyles} from '../styles';

export default function OrderItem() {
  return (
    <View style={styles.container}>
      <Text style={styles.orderId}>Order# 1234</Text>

      <Text style={styles.names}>Women T-Shirt, Mens Shoes, Men Suits</Text>

      <View style={styles.row}>
        <Text>Placed On</Text>
        <Text>17-06-2021 | 06:00:03Z</Text>
      </View>
      <View style={styles.row}>
        <Text>Total (Inc Tax)</Text>
        <Text>PKR 165.2</Text>
      </View>
      <View style={styles.divider} />
      <View style={styles.row}>
        <Text>Payment status</Text>
        <Badge size={26} style={[styles.badge, defaultStyles.bg_success]}>
          Paid
        </Badge>
      </View>
      <View style={styles.row}>
        <Text>Order Status</Text>
        {/* <Text style={styles.badge}>Unfulfilled</Text> */}
        <Badge size={26} style={styles.badge}>
          Unfulfilled
        </Badge>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.LIGHT,
    marginHorizontal: 16,
    paddingBottom: 8,
    borderRadius: 6,
    marginBottom: 24,
  },
  orderId: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    fontSize: 16,
    color: colors.BLACK,
  },
  names: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    paddingVertical: 12,
    paddingHorizontal: 6,
    color: colors.DARK_400,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 6,
    paddingVertical: 5,
  },
  divider: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    height: 1,
    marginVertical: 16,
  },
  badge: {
    // backgroundColor: colors.LOGO_COLOR,
    minWidth: 80,
    borderRadius: 2,
  },
});
