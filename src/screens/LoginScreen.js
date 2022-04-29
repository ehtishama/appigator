import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from 'react-native-paper';
import FormFieldError from '../components/FormFieldError';
import {colors} from '../config/colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {formStyles} from '../styles';

const initialValues = {email: '', password: ''};
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email address is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={formStyles.container}>
      <Text style={formStyles.title}>Login</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={values => console.log(values)}
        validationSchema={LoginSchema}>
        {({handleChange, handleBlur, handleSubmit, values, errors}) => (
          <View style={formStyles.form}>
            <TextInput
              label={'Email *'}
              value={values.email}
              placeholder={'dummyemail@gmail.com'}
              keyboardType="email-address"
              onBlur={handleBlur('email')}
              onChangeText={handleChange('email')}
              autoCapitalize={'none'}
              style={formStyles.field}
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
              style={formStyles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.password}
            />
            {errors.password && <FormFieldError text={errors.password} />}

            <Button
              block
              title={'Sign Up'}
              edgesRound={false}
              onPress={handleSubmit}
            />
          </View>
        )}
      </Formik>
      <Text style={formStyles.bottomText}>
        Don't have an account?{' '}
        <Text
          style={formStyles.link}
          onPress={() => navigation.navigate('SignupScreen')}>
          Signup
        </Text>
      </Text>
    </ScrollView>
  );
}
