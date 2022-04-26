import React from 'react';
import {View, Modal, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/AntDesign';
import {dummyData} from '../api/dummyData';

import {colors} from '../config/colors';
import {defaultStyles} from '../styles';
import CheckBoxList from './CheckBoxList';
import CheckBoxListFooter from './CheckBoxList/CheckBoxListFooter';

export default function FilterModal({visible, onClose}) {
  return (
    <Modal {...{visible}} animationType="slide">
      <TouchableOpacity
        onPress={onClose}
        style={[defaultStyles.action, styles.action]}>
        <Icon
          name="closecircle"
          size={25}
          color={colors.LOGO_COLOR}
          backgroundColor={'transparent'}
        />
      </TouchableOpacity>

      <FlatList
        ListHeaderComponent={
          <>
            <Text style={styles.header}>Search Results</Text>
            {dummyData.filterOptions.map((option, idx) => (
              <CheckBoxList title={option.title} options={option.options} />
            ))}
          </>
        }
        ListFooterComponent={CheckBoxListFooter}
      />
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {},
  action: {alignSelf: 'flex-end', padding: 16, position: 'absolute', zIndex: 1},
  header: {
    fontSize: 26,
    textAlign: 'center',
    fontWeight: '600',
    marginTop: 20,
    // backgroundColor: 'red',
  },
});
