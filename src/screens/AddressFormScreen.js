import {View, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {TextInput} from 'react-native-paper';
import {colors} from '../config/colors';
import FormFieldError from '../components/FormFieldError';
import Button from '../components/Button';

const initialValues = {
  firstName: '',
  lastName: '',
  address: '',
  addressCompliment: '',
  postalCode: '',
  phone: '',
  country: '',
  province: '',
  city: '',
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  address: Yup.string().required(),
  addressCompliment: Yup.string().required(),
  postalCode: Yup.string().required(),
  phone: Yup.string().required(),
  country: Yup.string().required(),
  province: Yup.string().required(),
  city: Yup.string().required(),
});

export default function AddressFormScreen() {
  const [serverError, setServerError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {};
  return (
    <ScrollView style={styles.container}>
      <Formik
        validateOnBlur={false}
        onSubmit={handleSubmit}
        validateOnChange={false}
        initialValues={initialValues}
        validationSchema={validationSchema}>
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
              activeUnderlineColor={colors.LOGO_COLOR}
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
              label={'Address *'}
              value={values.address}
              keyboardType="default"
              onBlur={handleBlur('address')}
              onChangeText={handleChange('address')}
              autoCapitalize={'none'}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.address}
            />
            {errors.address && <FormFieldError text={errors.address} />}
            <TextInput
              label={'Address Compliment *'}
              value={values.addressCompliment}
              keyboardType="default"
              onBlur={handleBlur('addressCompliment')}
              onChangeText={handleChange('addressCompliment')}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.addressCompliment}
            />
            {errors.addressCompliment && (
              <FormFieldError text={errors.addressCompliment} />
            )}

            <TextInput
              label={'Zip Postal Code *'}
              value={values.postalCode}
              keyboardType="default"
              onBlur={handleBlur('postalCode')}
              onChangeText={handleChange('postalCode')}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.postalCode}
            />
            {errors.postalCode && <FormFieldError text={errors.postalCode} />}

            <TextInput
              label={'Phone *'}
              value={values.phone}
              keyboardType="default"
              onBlur={handleBlur('phone')}
              onChangeText={handleChange('phone')}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.phone}
            />
            {errors.phone && <FormFieldError text={errors.phone} />}

            <TextInput
              label={'Country *'}
              value={values.country}
              keyboardType="default"
              onBlur={handleBlur('country')}
              onChangeText={handleChange('country')}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.country}
            />
            {errors.country && <FormFieldError text={errors.country} />}

            <TextInput
              label={'Province *'}
              value={values.province}
              keyboardType="default"
              onBlur={handleBlur('province')}
              onChangeText={handleChange('province')}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.province}
            />
            {errors.province && <FormFieldError text={errors.province} />}

            <TextInput
              label={'City *'}
              value={values.city}
              keyboardType="default"
              onBlur={handleBlur('city')}
              onChangeText={handleChange('city')}
              style={styles.field}
              mode="outlined"
              activeOutlineColor={colors.LOGO_COLOR}
              error={errors.city}
            />
            {errors.city && <FormFieldError text={errors.city} />}

            {!!serverError && <FormFieldError text={serverError} />}
            <Button
              block
              title={'Submit'}
              edgesRound={false}
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
  container: {paddingHorizontal: 16},

  field: {
    marginBottom: 8,
  },

  form: {
    marginBottom: 16,
  },
});
