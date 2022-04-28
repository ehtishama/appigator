import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import EnIcon from 'react-native-vector-icons/Entypo';
import AdIcon from 'react-native-vector-icons/AntDesign';
import FaIcon from 'react-native-vector-icons/FontAwesome';

import {colors} from '../config/colors';
import PaymentMehodItem from './PaymentMehodItem';

const paymentMethods = [
  {id: 1, text: 'Add a new Card', icon: <AdIcon name="creditcard" size={20} />},
  {
    id: 2,
    text: '1234 5678 90000 4321',
    icon: <FaIcon name="cc-visa" color={colors.LOGO_COLOR} size={20} />,
  },
];

export default function SelectPaymentMethod() {
  const [selectedMethod, setSelectedMethod] = useState(1);

  return (
    <View style={styles.container}>
      {/* header */}
      <TouchableHighlight
        onPress={f => f}
        style={styles.headerContainer}
        underlayColor={colors.LIGHT_BACKGROUND}>
        <View style={styles.header}>
          <Icon name="ios-wallet-outline" size={30} />
          <Text style={styles.headerText}>Select Payment Method</Text>
          <TouchableOpacity>
            <EnIcon name="chevron-thin-up" size={20} />
          </TouchableOpacity>
        </View>
      </TouchableHighlight>

      <View style={styles.paymentsContainer}>
        {paymentMethods.map(method => (
          <PaymentMehodItem
            text={method.text}
            icon={method.icon}
            selected={method.id === selectedMethod}
            onPress={() => setSelectedMethod(method.id)}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 2,
    borderColor: colors.LIGHT_BACKGROUND,
  },
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    flex: 1,
    marginHorizontal: 8,
    fontSize: 15,
    color: colors.BLACK,
  },
  paymentsContainer: {
    marginHorizontal: 32,
    paddingBottom: 6,
  },
});
