import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {colors} from '../config/colors';

export default function Counter({value = 1, onChange = f => f}) {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    onChange(value - 1);
  };
  return (
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
  );
}

const styles = StyleSheet.create({
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
