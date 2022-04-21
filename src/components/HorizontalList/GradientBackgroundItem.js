import {Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {colors} from '../../config/colors';
import LinearGradient from 'react-native-linear-gradient';
import {shadows} from '../../config/shadows';

const itemWidth = Dimensions.get('window').width / 3 - 10;

export default function GradientBackgroundItem({text, colors}) {
  return (
    <TouchableOpacity style={styles.shadow}>
      <LinearGradient
        style={styles.container}
        colors={colors}
        // start={{ x: 0.4, y: 0.3 }}
      >
        <Text style={styles.text}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    minWidth: itemWidth,
    minHeight: 60,
    borderRadius: 6,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    overflow: 'visible',
  },
  text: {
    color: colors.WHITE,
    fontWeight: '600',
  },
  shadow: {
    elevation: 4,
  },
});
