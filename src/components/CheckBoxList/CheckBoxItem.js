import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {colors} from '../../config/colors';

export default function CheckBoxItem({title, checked = false}) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleCheck = () => {
    if (isChecked === 'checked') {
      setIsChecked('unchecked');
    } else {
      setIsChecked('checked');
    }
  };

  return (
    <View style={styles.container}>
      <Checkbox
        status={isChecked}
        color={colors.LOGO_COLOR}
        onPress={handleCheck}
      />
      <Text>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.5,
  },
});
