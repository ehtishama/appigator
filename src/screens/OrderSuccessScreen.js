import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

import Button from '../components/Button';
import CartItem from '../components/CartItem';
import {colors} from '../config/colors';
import {defaultStyles} from '../styles';
import {useNavigation} from '@react-navigation/native';

export default function OrderSuccessScreen() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <LottieView
          autoPlay
          loop={false}
          source={require('../assets/lottie/check.json')}
          style={styles.animation}
        />
        <Text style={defaultStyles.title}>ORDER SUCCESSFUL!</Text>
        <Text>Thank you for your order</Text>
        <Text style={[defaultStyles.my_sm, styles.orderNumberContainer]}>
          Your order number is: <Text style={styles.orderNumber}>0123456</Text>
        </Text>

        <View style={styles.itemsContainer}>
          <CartItem />
        </View>

        <Text style={styles.trackText}>
          You can track your order by clicking on
        </Text>
        <Text style={defaultStyles.textLink}>My Account</Text>

        <View style={styles.buttonContainer}>
          <Button
            title={'Back to Home'}
            block
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orderNumberContainer: {
    marginTop: 10,
    fontSize: 16,
  },
  orderNumber: {
    fontWeight: '600',
    fontSize: 18,
    color: colors.LOGO_COLOR,
  },
  itemsContainer: {
    width: '100%',
    paddingHorizontal: 8,
    marginVertical: 8,
  },
  animation: {
    height: 180,
  },
  trackText: {
    fontSize: 16,
    // marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 12,
    width: '100%',
    paddingHorizontal: 16,
  },
});
