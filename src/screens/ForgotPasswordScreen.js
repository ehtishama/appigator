import * as Yup from 'yup';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, ScrollView, Alert} from 'react-native';

import {formStyles} from '../styles';
import {colors} from '../config/colors';
import Button from '../components/Button';
import FormFieldError from '../components/FormFieldError';
import {usersApi} from '../api/users';

const initialValues = {email: ''};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email address')
    .required('Email address is required'),
});

export default function ForgotPasswordScreen() {
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState(null);

  const handleSubmit = async values => {
    try {
      setLoading(true);
      setServerError(null);

      const {data: resp} = await usersApi.forgetPassword(values.email);
      console.log('Response: ', resp);
      if (resp) {
        Alert.alert(
          'Reset Email Sent',
          'A reset email with instructions has been sent. Please check you inbox.',
        );
      } else {
        Alert.alert(
          'Error sending reset mail',
          'An error has occured while sending the reset email. Please try again later.',
        );
      }
    } catch (error) {
      const {data} = error.response;
      setServerError(data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView>
      <Text style={formStyles.title}>Login</Text>
      <Text style={styles.subTitle}>
        Please enter your email address below to receive a password reset link.
      </Text>

      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={formStyles.form}>
            <TextInput
              label={'Email *'}
              value={values.email}
              placeholder={'yourmail@domain.com'}
              keyboardType="email-address"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              autoCapitalize={'none'}
              //   style={formStyles.field}
              mode="outlined"
              error={errors.email}
              activeOutlineColor={colors.LOGO_COLOR}
            />

            {errors.email && <FormFieldError text={errors.email} />}
            {serverError && <FormFieldError text={serverError} />}

            <Button
              block
              edgesRound={false}
              title={'Reset my password'}
              onPress={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  subTitle: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
});
