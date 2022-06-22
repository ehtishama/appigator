import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {View, Text, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import {colors} from '../../../config/colors';
import {defaultStyles} from '../../../styles';
import {dummyData} from '../../../api/dummyData';
import VerticalLinkItem from './VerticalLinkItem';
import HorizonalLinkItem from './HorizonalLinkItem';
import HorizontalSelectionList from './HorizontalSelectionList';

const hrLinks = [
  {key: 1, title: 'Profile', iconName: 'user'},
  {key: 2, title: 'Address', iconName: 'pushpino', screen: 'AddressesScreen'},
  {key: 3, title: 'Orders', iconName: 'shoppingcart'},
];

const vrLinks = [
  {key: 1, title: 'Get in Touch'},
  {key: 2, title: 'Support Tickets'},
  {key: 3, title: 'About Appigator'},
];

export default function DrawerContent() {
  const navigation = useNavigation();
  const {isLoggedIn, user} = useSelector(state => state.auth);

  const [selectedCurrency, setSelectedCurrency] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState(1);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logoText}>MagentoApp</Text>
        {!isLoggedIn ? (
          <TouchableOpacity
            style={styles.signIn}
            onPress={() =>
              navigation.navigate('AuthNavigator', {screen: 'LoginScreen'})
            }>
            <Icon name="login" size={26} color={colors.WHITE} />
            <Text style={[defaultStyles.textLight, defaultStyles.mx_sm]}>
              Sign In
            </Text>
          </TouchableOpacity>
        ) : (
          <Text
            style={
              styles.username
            }>{`${user?.firstname} ${user?.lastname}`}</Text>
        )}
      </View>

      {/* horizontal links */}
      <View style={styles.hrLinks}>
        {hrLinks.map(link => (
          <HorizonalLinkItem
            key={link.key}
            title={link.title}
            icon={<Icon name={link.iconName} size={18} color={colors.WHITE} />}
            onPress={() => navigation.navigate(link.screen)}
          />
        ))}
      </View>

      {/* horizontal selection */}
      <HorizontalSelectionList
        options={dummyData.currencyOptinos}
        selected={selectedCurrency}
        onSelect={option => setSelectedCurrency(option.id)}
      />

      {/* list of links */}
      <View style={defaultStyles.flex1}>
        <FlatList
          data={vrLinks}
          keyExtractor={item => item.key}
          renderItem={({item}) => (
            <VerticalLinkItem title={item.title} onPress={() => null} />
          )}
        />
      </View>

      {/* bottom selection */}
      <HorizontalSelectionList
        options={dummyData.languageOptions}
        selected={selectedLanguage}
        onSelect={selectedOption => setSelectedLanguage(selectedOption.id)}
      />
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
  username: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});
