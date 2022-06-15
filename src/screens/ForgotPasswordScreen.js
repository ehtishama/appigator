import * as Yup from 'yup';
import {Formik} from 'formik';
import React, {useState} from 'react';
import {TextInput} from 'react-native-paper';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {formStyles} from '../styles';
import {colors} from '../config/colors';
import Button from '../components/Button';
import FormFieldError from '../components/FormFieldError';

const initialValues = {email: ''};

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid Email address')
    .required('Email address is required'),
});

export default function ForgotPasswordScreen() {
  const [loading, setLoading] = useState(false);
  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
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
