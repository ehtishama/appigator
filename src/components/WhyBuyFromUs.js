import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

import ListHeader from './HorizontalList/ListHeader';
import IconItem from './HorizontalList/IconItem';
import Icon from 'react-native-vector-icons/AntDesign';
import McIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';

export default function WhyBuyFromUs() {
  return (
    <View>
      <ListHeader title={'Why Buy from Us'} />

      <View style={styles.cards}>
        <IconItem
          titleInside
          icon={<Icon name={'lock'} size={35} />}
          title="Secure Webshop"
        />
        <IconItem
          titleInside
          icon={<MdIcon name={'support-agent'} size={35} />}
          title="Customer Advice"
        />
        <IconItem
          titleInside
          icon={<McIcon name={'truck-delivery-outline'} size={35} />}
          title="Fast Delivery"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  cards: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 16,
  },
});
