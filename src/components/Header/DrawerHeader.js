import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from '../../config/colors';

export default function DrawerHeader() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={openDrawer}>
        <Icon name="reorder-three" size={30} />
      </TouchableOpacity>
      <View>
        {/* <Text style={styles.title}>APPIGATOR</Text> */}
        <Image
          source={require('../../assets/app_logo.png')}
          style={styles.logo}
        />
      </View>
      <TouchableOpacity>
        <Icon name="md-cart-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: colors.HEADER_BACKGROUND,
  },
  drawerAction: {},
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
  rightActions: {},
});
