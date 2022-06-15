import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, StyleSheet} from 'react-native';
import AddressItem from '../components/AddressItem';
import Button from '../components/Button';

export default function AddressesScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.actionContainer}>
        <Button
          title={'Add New Address'}
          edgesRound={false}
          onPress={() => navigation.navigate('AddressFormScreen')}
        />
      </View>
      <AddressItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  actionContainer: {
    marginBottom: 16,
  },
});
