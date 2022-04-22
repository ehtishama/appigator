import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import HorizonalLinkItem from './HorizonalLinkItem';
import {colors} from '../../config/colors';
import {defaultStyles} from '../../styles';
import HorizontalSelectionList from './HorizontalSelectionList';
import {dummyData} from '../../api/dummyData';
import VerticalLinkItem from './VerticalLinkItem';

export default function DrawerContent() {
  const hrLinks = [
    {key: 1, title: 'Profile', iconName: 'user'},
    {key: 2, title: 'Address', iconName: 'pushpino'},
    {key: 3, title: 'Orders', iconName: 'shoppingcart'},
  ];

  const vrLinks = [
    {key: 1, title: 'Get in Touch'},
    {key: 2, title: 'Support Tickets'},
    {key: 3, title: 'About Appigator'},
  ];

  const [selectedCurrency, setSelectedCurrency] = useState(1);
  const [selectedLanguage, setSelectedLanguage] = useState(1);

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
          renderItem={({item}) => <VerticalLinkItem title={item.title} />}
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
});
