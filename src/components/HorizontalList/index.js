import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';
import {shadows} from '../../config/shadows';
import ListHeader from './ListHeader';

export default function HorizontalList({data, renderItem, title, onSeeAll}) {
  return (
    <View style={shadows.sm}>
      <View style={styles.container}>
        {title && <ListHeader title={title} />}
        <ScrollView horizontal style={styles.scrollContainer}>
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
