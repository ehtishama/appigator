import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CustomTextField from '../components/CustomTextField';
export default function AddressScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CustomTextField title={'First Name'} />
        <CustomTextField title={'Last Name'} />
        <CustomTextField title={'Address*'} />
        <CustomTextField title={'Address Complement*'} />
        <CustomTextField title={'Zip Postal Code*'} />
        <CustomTextField title={'Phone'} />
        <CustomTextField title={'Country*'} />
        <CustomTextField title={'Province*'} />
        <CustomTextField title={'City*'} />

        <TouchableOpacity
          style={styles.btnUpdateProfile}
          onPress={() => {
            console.log('he');
          }}>
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnUpdateProfile: {
    height: 50,
    width: 110,
    marginHorizontal: 16,
    marginTop: 10,
    justifyContent: 'center',
    backgroundColor: 'rgb(230,110,104)',
    marginBottom: 20,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
