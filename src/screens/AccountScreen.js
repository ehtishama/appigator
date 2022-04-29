/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Foundation from 'react-native-vector-icons/Foundation';
import AccounItem from '../components/AccountListWish/AccountItem';
import AccounOrder from '../components/AccountOrder/AccountOrder';
import Feather from 'react-native-vector-icons/Feather';
import ServicesList from '../components/AccountScreen/ServicesList';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../config/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function AccountScreen() {
  const navigation = useNavigation();
  // navigation.setOptions({title: 'Account Screen'});

  return (
    <View style={styles.container}>
      <View style={styles.profileLink}>
        <View style={styles.userImages}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://static-01.daraz.pk/p/be08ae6469685f81a1de7d139621762f.jpg',
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('AddressScreen');
          }}>
          <Text style={styles.userName}>Kashif Mehmood</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linksContainer}>
        <AccounItem
          icon={<AntDesign name="hearto" size={25} color="#000" />}
          title={'Wishlist'}
          onPress={() => {
            navigation.navigate('WishListScreen');
          }}
        />
        <AccounItem
          icon={<AntDesign name="staro" size={25} color="#000" />}
          title={'Favourites'}
          onPress={() => {}}
        />
        <AccounItem
          icon={<AntDesign name="clockcircleo" size={25} color="#000" />}
          title={'Viewed'}
          onPress={() => {}}
        />
        <AccounItem
          icon={<Foundation name="ticket" size={25} color="#000" />}
          title={'Coupons'}
          onPress={() => {
            navigation.navigate('VoucherScreen');
          }}
        />
      </View>

      <View style={styles.linkOrder}>
        <Text style={{color: colors.BLACK, fontSize: 17, fontWeight: 'bold'}}>
          Orders
        </Text>
        <View style={styles.viewAll}>
          <Text style={styles.textOrder}>View All</Text>
          <AntDesign name="right" size={20} color={colors.LIGHT} />
        </View>
      </View>

      <View style={styles.linksContainer}>
        <AccounOrder
          icon={<Ionicons name="wallet-outline" size={25} color="#000" />}
          title={'Unpaid'}
          onPress={() => {}}
        />
        <AccounOrder
          icon={<Feather name="box" size={25} color="#000" />}
          title={'To be Shipped'}
          onPress={() => {}}
        />
        <AccounOrder
          icon={<Feather name="truck" size={25} color="#000" />}
          title={'Shipped'}
          onPress={() => {}}
        />
        <AccounOrder
          icon={<Feather name="box" size={25} color="#000" />}
          title={'To be reviewed'}
          onPress={() => {}}
        />
      </View>
      <View style={styles.linkOrder}>
        <Text style={styles.textDipute}>In dispute</Text>
        <AntDesign name="right" size={20} color={colors.LIGHT} />
      </View>

      <View style={styles.services}>
        <Text
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            padding: 16,
            color: 'black',
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Services
        </Text>
      </View>
      <View style={styles.linksContainerServices}>
        <ServicesList
          icon={<Feather name="headphones" size={25} color="#fff" />}
          title={'Help Center'}
          onPress={() => {}}
          backgroundColor="rgb(107,200,97)"
        />
        <ServicesList
          icon={
            <MaterialCommunityIcons
              name="message-processing-outline"
              size={25}
              color="#fff"
            />
          }
          title={'Question & Answer'}
          onPress={() => {}}
          backgroundColor="rgb(246,160,159)"
        />
        <ServicesList
          icon={<EvilIcons name="location" size={25} color="#fff" />}
          title={'Shipping Address'}
          onPress={() => {}}
          backgroundColor="rgb(150,173,235)"
        />
        <ServicesList
          icon={<Foundation name="ticket" size={25} color="#000" />}
          title={'Coupons Center'}
          onPress={() => {}}
          backgroundColor="rgb(186,171,101)"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userImages: {
    height: 70,
    width: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    backgroundColor: 'gray',
  },

  linksContainer: {
    height: '13%',
    flexDirection: 'row',
    marginTop: '4%',
    paddingBottom: 10,
    justifyContent: 'space-around',
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(245,245,245)',
  },
  linksContainerServices: {
    height: '13%',
    flexDirection: 'row',
    marginTop: '4%',
    paddingBottom: 10,
    justifyContent: 'space-around',
  },
  linkOrder: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: 'rgb(245,245,245)',
  },
  textOrder: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  textDipute: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  image: {
    resizeMode: 'stretch',
    height: 70,
    width: 70,
    justifyContent: 'center',
    borderRadius: 35,
  },
  profileLink: {
    marginTop: '4%',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    marginLeft: '5%',
    fontWeight: 'bold',
    fontSize: 19,
  },
  viewAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  services: {},
});
