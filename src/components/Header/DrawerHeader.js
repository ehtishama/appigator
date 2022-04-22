import {DrawerActions, useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AdIcon from 'react-native-vector-icons/AntDesign';

import {colors} from '../../config/colors';
import SearchBox from '../SearchBox';

export default function DrawerHeader() {
  const navigation = useNavigation();
  const isPrevious = navigation.canGoBack();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={styles.container}>
      {isPrevious ? (
        <TouchableOpacity onPress={navigation.goBack}>
          <AdIcon name="left" size={25} color={colors.BLACK} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity onPress={openDrawer}>
          <Icon name="reorder-three" size={30} color={colors.BLACK} />
        </TouchableOpacity>
      )}
      <View style={styles.logoContainer}>
        {isPrevious ? (
          <SearchBox iconOnRight inputStyle={styles.inputStyle} />
        ) : (
          <Image
            source={require('../../assets/app_logo.png')}
            style={styles.logo}
          />
        )}
      </View>
      <TouchableOpacity>
        <Icon name="md-cart-outline" size={30} color={colors.BLACK} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
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
  inputStyle: {
    padding: 5,
  },
});
