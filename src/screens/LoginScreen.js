import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';

import FormFieldError from '../components/FormFieldError';
import {colors} from '../config/colors';
import Button from '../components/Button';
import {useNavigation} from '@react-navigation/native';
import {formStyles} from '../styles';
import {usersApi} from '../api/users';
import {login} from '../redux/reducers/authReducer';

const initialValues = {email: '', password: ''};
const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  password: Yup.string().required('Password is required'),
});

export default function LoginScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [apiError, setApiError] = useState(null);

  const handleSubmit = async values => {
    setApiError(null);
    try {
      const {email, password} = values;

      const {data: accessToken} = await usersApi.getCustomerToken(
        email,
        password,
      );

      const {data: user} = await usersApi.getCustomerProfile(accessToken);

      dispatch(login(user));

      navigation.goBack();
    } catch (error) {
      setApiError(
        error?.response?.data?.message || 'An unexpected error has occurred',
      );
      console.error(error);
    }
  };

  return (
    <ScrollView style={formStyles.container}>
      <Text style={formStyles.title}>Login</Text>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={LoginSchema}
        validateOnBlur={false}
        validateOnChange={false}>
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

            {apiError && <FormFieldError text={apiError} />}

            <Button
              block
              title={'Login'}
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
