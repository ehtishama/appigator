import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {colors} from '../../config/colors';

export default function CustomerInformationCard({
  email,
  shipppingAddress,
  billingAddress,
}) {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>Customer Information</Text>
        <Text style={styles.cardHeaderTitle}>{email}</Text>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardBodyTitle}>{'Shipping Address'}</Text>

        <Text style={styles.cardBodyText}>
          {'Ch Naveed Gill \nPlot 349, Street 1, I-9/3,\nIslamabad\nPakistan'}
        </Text>
      </View>

      <View style={[styles.cardBody, styles.secondaryCard]}>
        <Text style={styles.cardBodyTitle}>{'Billing Address'}</Text>

        <Text style={styles.cardBodyText}>
          {'Ch Naveed Gill \nPlot 349, Street 1, I-9/3,\nIslamabad\nPakistan'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {borderWidth: 1, borderColor: colors.LIGHT, marginBottom: 32},
  cardHeader: {
    padding: 16,
    backgroundColor: '#E8E8E8',
  },
  cardHeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  cardHeaderTitle: {fontSize: 15},
  cardBody: {padding: 16},
  cardBodyTitle: {fontSize: 16, fontWeight: '700'},
  cardBodyText: {
    fontSize: 15,
    marginTop: 8,
  },
  secondaryCard: {
    backgroundColor: '#E8E8E8',
  },
});
