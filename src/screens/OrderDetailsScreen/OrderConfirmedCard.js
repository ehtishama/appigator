import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import {colors} from '../../config/colors';

export default function OrderConfirmedCard() {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.checkContainer}>
          <Feather name="check" size={26} color={'darkgreen'} />
        </View>
        <View>
          <Text style={styles.cardHeaderText}>Your order is confiremd</Text>
          <Text style={styles.orderNumber}>Order #: 1022</Text>
        </View>
      </View>
      <View style={styles.cardBody}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
          }}>
          Thank You
          <Text style={{fontSize: 19, fontWeight: '700'}}>
            {' Ch Naveed Gill'}
          </Text>
        </Text>
        <Text style={styles.cardBodyText}>
          {
            'We’ve accepted your order, and we’re getting it ready. Come back to this page for updates on your shipment status.'
          }
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#E8E8E8',
  },
  checkContainer: {
    height: 45,
    width: 45,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    marginTop: 5,
  },
  card: {borderWidth: 1, borderColor: colors.LIGHT, marginBottom: 32},
  cardHeaderText: {
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
  orderNumber: {fontWeight: '600', fontSize: 15, textAlign: 'center'},
  cardBody: {padding: 16, alignItems: 'center'},
  cardBodyText: {
    fontSize: 15,
    marginTop: 8,
    textAlign: 'center',
  },
});
