import React, {useRef} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Animated} from 'react-native';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {colors} from '../../config/colors';

export default function AccordianHeader({
  title,
  subTitle,
  isOpen = false,
  onPress,
}) {
  const iconScale = useRef(new Animated.Value(1)).current;
  const iconRotate = iconScale.interpolate({
    inputRange: [0, 1],
    outputRange: ['90deg', '0deg'],
  });

  const handlePress = () => {
    Animated.timing(iconScale, {
      toValue: isOpen ? 1 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();

    onPress();
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <Text style={styles.title}>{`${title} | ${subTitle}`}</Text>
        <Animated.View style={{transform: [{rotate: iconRotate}]}}>
          <MaterialIcon name={'keyboard-arrow-right'} size={32} />
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_BACKGROUND,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    flex: 1,
    fontWeight: 'bold',
  },
});
