import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import ListHeader from './ListHeader';

export default function HorizontalList({
  data,
  renderItem,
  title,
  onSeeAll,
  listStyles,
}) {
  return (
    <View style={styles.container}>
      {title && <ListHeader title={title} onPress={onSeeAll} />}
      <ScrollView
        style={[styles.scrollContainer, listStyles]}
        horizontal
        showsHorizontalScrollIndicator={false}>
        {data.map(renderItem)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 18},

  scrollContainer: {
    paddingLeft: 16,
    paddingRight: 20,
    paddingTop: 10,
  },
});
