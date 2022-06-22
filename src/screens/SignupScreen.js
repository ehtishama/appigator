import React, {useState} from 'react';
import {Formik} from 'formik';
import {View, Text, StyleSheet, Alert} from 'react-native';
import {TextInput} from 'react-native-paper';
import {ScrollView} from 'react-native-gesture-handler';
import * as Yup from 'yup';

import {colors} from '../config/colors';
import Button from '../components/Button';
import FormFieldError from '../components/FormFieldError';
import {useNavigation} from '@react-navigation/native';
import {usersApi} from '../api/users';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
};

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('First Name is required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Last Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email address is required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Password is required'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords do not match')
    .required('Repeat password is required'),
});

export default function SignupScreen() {
  const navigation = useNavigation();

  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async values => {
    const newCustomer = {
      customer: {
        firstname: values.firstName,
        lastname: values.lastName,
        email: values.email,
      },
      password: values.password,
    };

    try {
      setServerError(false);
      setLoading(true);

      const {data} = await usersApi.createCustomer(newCustomer);
      console.log('Response data: ', data);

      // show an alert on success
      Alert.alert(
        'Congratulations',
        'Your account has been created. You can now go back and login.',
        [{text: 'Login now', onPress: () => navigation.goBack()}],
      );
    } catch (error) {
      setServerError(
        error?.response?.data?.message || 'An error has occured on the server',
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      <Formik
        validateOnBlur={false}
        onSubmit={handleSubmit}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={SignupSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={styles.form}>
            <TextInput
              label={'First Name *'}
              value={values.firstName}
              placeholder={'John'}
              keyboardType="name-phone-pad"
              onBlur={handleBlur('firstName')}
              onChangeText={handleChange('firstName')}
              autoCapitalize={'words'}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.firstName}
            />
            {errors.firstName && <FormFieldError text={errors.firstName} />}

            <TextInput
              label={'Last Name *'}
              value={values.lastName}
              placeholder={'Doe'}
              keyboardType="name-phone-pad"
              onBlur={handleBlur('lastName')}
              onChangeText={handleChange('lastName')}
              autoCapitalize={'words'}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.lastName}
            />
            {errors.lastName && <FormFieldError text={errors.lastName} />}

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
              error={errors.email}
            />
            {errors.email && <FormFieldError text={errors.email} />}
            <TextInput
              label={'Password *'}
              value={values.password}
              placeholder={'*********'}
              keyboardType="ascii-capable"
              onBlur={handleBlur('password')}
              onChangeText={handleChange('password')}
              autoCapitalize={'none'}
              secureTextEntry
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.password}
            />
            {errors.password && <FormFieldError text={errors.password} />}
            <TextInput
              label={'Repeat Password *'}
              value={values.repeatPassword}
              placeholder={'*********'}
              keyboardType="ascii-capable"
              onBlur={handleBlur('repeatPassword')}
              onChangeText={handleChange('repeatPassword')}
              autoCapitalize={'none'}
              style={styles.field}
              mode="outlined"
              secureTextEntry
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.repeatPassword}
            />
            {errors.repeatPassword && (
              <FormFieldError text={errors.repeatPassword} />
            )}
            {!!serverError && <FormFieldError text={serverError} />}
            <Button
              block
              title={'Sign Up'}
              edgesRound={false}
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>
      <Text style={styles.bottomText}>
        Already have an account?{' '}
        <Text
          style={styles.link}
          onPress={() => navigation.navigate('LoginScreen')}>
          Sign in
        </Text>
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
