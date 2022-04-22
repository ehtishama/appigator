import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {defaultStyles} from '../../styles';

export default function HorizonalLinkItem({icon, title}) {
  return (
    <View style={[styles.hrLinkContainer, defaultStyles.mx_sm]}>
      <TouchableOpacity>
        <View style={styles.hrLink}>
          {icon}
          <Text style={defaultStyles.textLight}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  hrLinkContainer: {
    alignItems: 'center',
    padding: 10,
    flex: 0.3,
  },
  hrLink: {
    alignItems: 'center',
  },
});
