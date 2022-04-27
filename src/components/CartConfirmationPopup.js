import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

import {colors} from '../config/colors';
import Button from './Button';
import OverlayModal from './OverlayModal';

export default function CartConfirmationPopup({
  visible,
  product: {image, title},
  quantity = 1,
  onClose,
  onCheckout,
  onContinueShopping,
}) {
  return (
    <OverlayModal {...{visible}}>
      <View style={styles.container}>
        <Text style={styles.textCongrats}>Congratulations</Text>
        <Image style={styles.image} source={image} />
        <Text style={styles.productTitle}>{title}</Text>
        <Text style={styles.quantity}>Quantity: {quantity}</Text>
        <Button
          title={'Continue Shopping'}
          variant="outline"
          onPress={onContinueShopping}
        />
        <Button title={'Proceed to Checkout'} onPress={onCheckout} />
        {/* close button */}
        <TouchableOpacity onPress={onClose} style={styles.close}>
          <Icon name="closecircle" color={colors.LOGO_COLOR} size={25} />
        </TouchableOpacity>
      </View>
    </OverlayModal>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    padding: 16,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 2,
  },
  textCongrats: {
    textAlign: 'center',
    marginVertical: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  image: {
    height: 140,
    width: '100%',
    resizeMode: 'cover',
    marginVertical: 10,
  },
  productTitle: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  quantity: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    marginVertical: 10,
  },
  close: {
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
