import React from 'react';
import {Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import UpdateProfile from '../components/CustomTextField';
export default function UpdateProfileScreen() {
  //   const [firstName, setFirstName] = React.useState();
  //   const [flistName, setLastName] = React.useState();
  //   const [email, setEmail] = React.useState();
  //   const [newPassword, setNewPassword] = React.useState();
  //   const [confirmPassword, setConfirmPassword] = React.useState();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <UpdateProfile title={'First Name'} />
        <UpdateProfile title={'Last Name'} />
        <UpdateProfile title={'Email'} />
        <UpdateProfile title={'New Password*'} />
        <UpdateProfile title={'Confirm Password*'} />

        <TouchableOpacity
          style={styles.btnUpdateProfile}
          onPress={() => {
            console.log('he');
          }}>
          <Text style={styles.btnText}>UPDATE</Text>
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
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
});
