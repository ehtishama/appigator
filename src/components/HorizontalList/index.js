import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';
import {shadows} from '../../config/shadows';

export default function HorizontalList({data, renderItem, title, onSeeAll}) {
  return (
    <View style={shadows.sm}>
      <View style={styles.container}>
        {title && (
          <View style={styles.header}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <TouchableOpacity>
              <Text style={styles.textLight}>See All</Text>
            </TouchableOpacity>
          </View>
        )}
        <ScrollView horizontal style={styles.scrollContainer}>
          {data.map(renderItem)}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginBottom: 18},
  title: {
    fontSize: 22,
    fontWeight: '500',
    color: colors.TEXT,
    flex: 1,
  },
  header: {
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  scrollContainer: {
    paddingLeft: 14,
    paddingBottom: 10,
    overflow: 'visible',
    padding: 20,
  },
  textLight: {
    color: colors.TEXT_LIGHT,
    fontWeight: '600',
    padding: 8,
  },
});
