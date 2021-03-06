import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import EnIcon from 'react-native-vector-icons/Entypo';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {View, StyleSheet, TouchableOpacity, Image, Text} from 'react-native';

import {colors} from '../../config/colors';
import SearchBox from '../SearchBox';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function DrawerHeader({
  title,
  actionRight,
  actionRightShown = true,
  logo = false,
}) {
  const navigation = useNavigation();
  const isPrevious = navigation.canGoBack();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  const renderContent = () => {
    if (title) {
      return <Text style={styles.title}>{title}</Text>;
    }
    if (isPrevious && !logo) {
      return <SearchBox iconOnRight inputStyle={styles.inputStyle} />;
    }
    return (
      <Image
        source={require('../../assets/app_logo.png')}
        style={styles.logo}
      />
    );
  };

  const renderActionRight = () => {
    if (!actionRightShown) {
      // return a transparent icon to keep things aligned
      return (
        <TouchableOpacity>
          <Icon name="md-cart-outline" size={30} color={'transparent'} />
        </TouchableOpacity>
      );
    }
    if (actionRight) {
      return actionRight;
    }

    return (
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
        <Icon name="md-cart-outline" size={30} color={colors.BLACK} />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {isPrevious ? (
          <TouchableOpacity onPress={navigation.goBack} style={{padding: 4}}>
            <EnIcon name="chevron-thin-left" size={25} color={colors.BLACK} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={openDrawer}>
            <Icon name="reorder-three" size={30} color={colors.BLACK} />
          </TouchableOpacity>
        )}
        <View style={styles.logoContainer}>{renderContent()}</View>
        {renderActionRight()}
      </View>
    </SafeAreaView>
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
    marginTop: StatusBar.currentHeight,
  },
  drawerAction: {},
  title: {
    fontSize: 20,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: colors.DARK_100,
    paddingVertical: 4,
  },
  rightActions: {
    backgroundColor: 'red',
  },
  inputStyle: {
    padding: 5,
  },
});
