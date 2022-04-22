import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import HorizonalLinkItem from './HorizonalLinkItem';
import {colors} from '../../config/colors';
import {defaultStyles} from '../../styles';

export default function DrawerContent() {
  const hrLinks = [
    {key: 1, title: 'Profile', iconName: 'user'},
    {key: 2, title: 'Address', iconName: 'pushpino'},
    {key: 3, title: 'Orders', iconName: 'shoppingcart'},
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>Appigator</Text>
        <TouchableOpacity style={styles.signIn}>
          <Icon name="login" size={26} color={colors.WHITE} />
          <Text style={[defaultStyles.textLight, defaultStyles.mx_sm]}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
      {/* horizontal links */}
      <View style={styles.hrLinks}>
        {hrLinks.map(link => (
          <HorizonalLinkItem
            key={link.key}
            title={link.title}
            icon={<Icon name={link.iconName} size={18} color={colors.WHITE} />}
          />
        ))}
      </View>
      {/* horizontal selection */}

      {/* list of links */}

      {/* bottom selection */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.DARK_100,
    flex: 1,
    color: colors.LIGHT,
  },
  header: {
    width: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.DARK_400,
  },
  logoText: {
    ...defaultStyles.textLight,
    fontWeight: 'bold',
    fontSize: 26,
    marginBottom: 18,
    textTransform: 'uppercase',
  },
  signIn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hrLinks: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: colors.DARK_300,
  },
});
