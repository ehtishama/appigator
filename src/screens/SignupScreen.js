import React from 'react';
import {Formik} from 'formik';
import {View, Text, StyleSheet} from 'react-native';
import {colors} from '../config/colors';
import {TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import Button from '../components/Button';

const initialValues = {
  fullName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

export default function SignupScreen() {
  const handleSubmit = values => {
    console.log(values);
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}>
        {({handleChange, handleBlur, handleSubmit, values}) => (
          <View style={styles.form}>
            <TextInput
              label={'Name *'}
              value={values.fullName}
              placeholder={'Your full name'}
              keyboardType="name-phone-pad"
              onBlur={handleBlur('fullName')}
              onChangeText={handleChange('fullName')}
              autoCapitalize={'words'}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
            />
            <TextInput
              label={'Email *'}
              value={values.email}
              placeholder={'dummyemail@gmail.com'}
              keyboardType="email-address"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              autoCapitalize={'none'}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
            />
            <TextInput
              label={'Password *'}
              value={values.password}
              placeholder={'password'}
              keyboardType="ascii-capable"
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              autoCapitalize={'none'}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
            />
            <TextInput
              label={'Repeat Password *'}
              value={values.repeatPassword}
              placeholder={'passwrod'}
              keyboardType="ascii-capable"
              onBlur={handleBlur('repeatPassword')}
              onChangeText={handleChange('repeatPassword')}
              autoCapitalize={'none'}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
            />
            <Button
              block
              title={'Sign Up'}
              edgesRound={false}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Text style={styles.bottomText}>
        Already have an account? <Text style={styles.link}>Sign in</Text>
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    paddingHorizontal: 16,
    color: colors.DARK_100,
  },
  form: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  field: {
    marginBottom: 10,
    borderColor: colors.LOGO_COLOR,
  },
  bottomText: {
    textAlign: 'center',
    marginVertical: 12,
  },
  link: {
    color: colors.LOGO_COLOR,
    fontWeight: '600',
    fontSize: 16,
  },
});
