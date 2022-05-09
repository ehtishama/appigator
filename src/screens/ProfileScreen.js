/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {colors} from '../config/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.profileBackGround}></View>

      <View style={styles.userCard}>
        <View style={styles.userImages}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://static-01.daraz.pk/p/be08ae6469685f81a1de7d139621762f.jpg',
            }}
          />
        </View>
        <Text style={styles.userName}>Sohaib Khalid</Text>
        <Text style={styles.userEmail}>sohaib.khalid@unitedsol.net</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View style={styles.btnStyle}>
          <Feather name="edit" size={20} color="#000" />
          <View style={styles.flexText}>
            <Text style={styles.text}>Update Profile</Text>
            <AntDesign name="arrowright" size={20} color={colors.LIGHT} />
          </View>
        </View>
        <View style={styles.btnStyle2}>
          <FontAwesome name="reorder" size={20} color="#000" />
          <View style={styles.flexText}>
            <Text style={styles.text}>My Orders</Text>
            <AntDesign name="arrowright" size={20} color={colors.LIGHT} />
          </View>
        </View>
        <View style={styles.btnStyle}>
          <EvilIcons name="location" size={20} color="#000" />
          <View style={styles.flexText}>
            <Text style={styles.text}>Shipping Address</Text>
            <AntDesign name="arrowright" size={20} color={colors.LIGHT} />
          </View>
        </View>
        <View style={styles.btnStyle2}>
          <Feather name="log-out" size={20} color="#000" />
          <View style={styles.flexText}>
            <Text style={styles.text}>SignOut</Text>
            <AntDesign name="arrowright" size={20} color={colors.LIGHT} />
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileBackGround: {
    height: 150,
    backgroundColor: 'rgb(203,228,238)',
  },
  userCard: {
    height: 150,
    backgroundColor: colors.WHITE,
    marginHorizontal: 20,
    marginTop: '-20%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.LIGHT,
    borderWidth: 1,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
  },
  userEmail: {
    margin: 5,
    fontSize: 17,
    color: colors.BLACK,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 6,
  },
  btnStyle: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 50,
    padding: 5,
    alignItems: 'center',
  },
  btnStyle2: {
    flexDirection: 'row',
    marginHorizontal: 20,
    height: 40,
    padding: 5,
    alignItems: 'center',
    backgroundColor: 'rgb(249,249,249)',
  },
  flexText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    flex: 1,
  },
  userImages: {
    height: 80,
    width: 80,
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: '-21%',
    backgroundColor: 'rgb(203,258,258)',
  },
  image: {
    resizeMode: 'stretch',
    height: 80,
    width: 80,
    justifyContent: 'center',
    borderRadius: 40,
  },
});
