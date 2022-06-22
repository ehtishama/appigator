import {View, StyleSheet, Image} from 'react-native';
import React from 'react';

export default function CarouselItem({image}) {
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.bannerImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 3,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
