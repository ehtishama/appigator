import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function CarouselItem() {
  return (
    <View style={styles.container}>
      <Text>Carousel Item</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    borderRadius: 8,
  },
});
