import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import ListHeader from './ListHeader';

export default function HorizontalList({
  data,
  renderItem,
  title,
  onSeeAll,
  listStyles,
  snapToInterval = null,
}) {
  return (
    <View style={styles.container}>
      {title && <ListHeader title={title} onPress={onSeeAll} />}
      <ScrollView
        horizontal
        bounces={false}
        decelerationRate="fast"
        // snapToInterval={140 + 18}
        showsHorizontalScrollIndicator={false}
        style={[styles.scrollContainer, listStyles]}>
        {data.map(renderItem)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},

  scrollContainer: {
    paddingLeft: 16,
    paddingRight: 20,
    paddingTop: 10,
  },
});
