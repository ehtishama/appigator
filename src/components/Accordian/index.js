import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import AccordianHeader from './AccordianHeader';

export default function Accordian({title, subTitle, children}) {
  const [isOpen, setIsOpen] = useState(false);

  const handleHeaderPress = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <View>
      <AccordianHeader
        onPress={handleHeaderPress}
        {...{title, subTitle, isOpen}}
      />
      {isOpen && children}
    </View>
  );
}

const styles = StyleSheet.create({container: {}});
