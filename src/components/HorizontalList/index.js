import React from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';
import {shadows} from '../../config/shadows';
import ListHeader from './ListHeader';

export default function HorizontalList({
  data,
  renderItem,
  title,
  onSeeAll,
  listStyles,
}) {
  return (
    <View style={shadows.sm}>
      <View style={styles.container}>
        {title && <ListHeader title={title} />}
        <ScrollView horizontal style={[styles.scrollContainer, listStyles]}>
          {data.map(renderItem)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 18},

  scrollContainer: {
    paddingHorizontal: 14,
    paddingBottom: 10,
    overflow: 'visible',
    padding: 20,
  },
});
