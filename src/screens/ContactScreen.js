import React from 'react';
import {Linking, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CustomerCare from '../components/CustomerCare';
import {colors} from '../config/colors';
export default function ContactScreen(params) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomerCare
          icon={<Ionicons name="call-outline" size={25} color="#000" />}
          title={'Call Us'}
          Msg={
            'Lorem Ipsum is simply dummy \n text of the printing and typecasting'
          }
          onPress={() => {
            Linking.openURL(`tel:${'920009884'}`);
          }}
          btnText={'920009884'}
        />
        <CustomerCare
          icon={
            <MaterialCommunityIcons
              name="email-outline"
              size={25}
              color="#000"
            />
          }
          title={'Email'}
          Msg={
            'Lorem Ipsum is simply dummy \n text of the printing and typecasting'
          }
          onPress={() => {
            // eslint-disable-next-line no-undef
            Linking.openURL('mailto:support@example.com');
          }}
          btnText={'Email Us'}
        />
        <CustomerCare
          icon={
            <MaterialCommunityIcons
              name="chat-question-outline"
              size={25}
              color="#000"
            />
          }
          title={'FAQ ' + "'" + 's'}
          Msg={
            'Lorem Ipsum is simply dummy \n text of the printing and typecasting'
          }
          onPress={() => {}}
          btnText={'FAQ ' + "'" + 's'}
        />
        <CustomerCare
          icon={<AntDesign name="like2" size={25} color="#000" />}
          title={'Feedback'}
          Msg={
            'Lorem Ipsum is simply dummy \n text of the printing and typecasting'
          }
          onPress={() => {}}
          btnText={'Contact us'}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
});
