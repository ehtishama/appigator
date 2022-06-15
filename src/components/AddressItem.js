import React from 'react';
import {colors} from '../config/colors';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {TouchableRipple} from 'react-native-paper';

export default function AddressItem() {
  return (
    <TouchableRipple
      onPress={f => f}
      style={styles.container}
      rippleColor={colors.LOGO_COLOR}
      centered
      borderless>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.title}>Sohaib Khalid</Text>

          <View style={styles.actions}>
            <TouchableOpacity style={styles.mr_sm}>
              <AntDesignIcon name="edit" size={26} />
            </TouchableOpacity>

            <TouchableOpacity>
              <AntDesignIcon name="delete" size={26} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.row}>
          <EntypoIcon name="location-pin" size={22} style={styles.mr_sm} />
          <Text>{'Plot #349, Street 1, Islamabad, Pakistan \n4400'}</Text>
        </View>

        <View style={styles.row}>
          <EntypoIcon name="phone" size={22} style={styles.mr_sm} />
          <Text>0334-6565588</Text>
        </View>
      </View>
    </TouchableRipple>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    borderRadius: 12,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.LIGHT,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  actions: {
    flexDirection: 'row',
  },
  title: {
    fontWeight: '700',
    fontSize: 18,
    color: colors.DARK_400,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  mr_sm: {
    marginRight: 11,
  },
});
