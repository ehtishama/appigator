/* eslint-disable react-native/no-inline-styles */
import {View, StyleSheet, Animated} from 'react-native';
import React, {useRef, useState} from 'react';
import AccordianHeader from './AccordianHeader';

export default function Accordian({title, subTitle, children}) {
  const [bodyHeight, setBodyHeight] = useState(0);
  const heightValue = useRef(new Animated.Value(0)).current;

  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderPress = () => {
    setIsOpen(prev => !prev);

    Animated.timing(heightValue, {
      duration: 300,
      toValue: isOpen ? 0 : bodyHeight,
      useNativeDriver: false,
    }).start();
  };

  const handleLayout = event => {
    const {height} = event.nativeEvent.layout;

    if (height > bodyHeight) {
      setBodyHeight(height);
    }
  };

  return (
    <View>
      <AccordianHeader
        onPress={handleHeaderPress}
        {...{title, subTitle, isOpen}}
      />
      <Animated.View
        onLayout={handleLayout}
        style={{
          height: bodyHeight === 0 ? null : heightValue,
          overflow: 'hidden',
        }}>
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({container: {}});
