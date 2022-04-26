import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {colors} from '../config/colors';

export default function QuantityCounter({value = 1, onChange = f => f}) {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };

  return (
    <View style={styles.productOption}>
      <Text style={styles.optionTitle}>Quantity</Text>
      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.action} onPress={handleDecrement}>
          <Text>-</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="quantity"
          value={'' + value}
          style={styles.quantityInput}
        />
        <TouchableOpacity style={styles.action} onPress={handleIncrement}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderBottomWidth: 2,
    borderBottomColor: colors.LIGHT,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  quantityInput: {
    padding: 0,
    borderWidth: 1,
    borderColor: colors.LIGHT,
    width: 60,
    textAlign: 'center',
  },
  action: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.LIGHT,
  },
});
