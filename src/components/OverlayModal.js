import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';

export default function OverlayModal({visible, children}) {
  return (
    <Modal visible={visible} animationType={'slide'} transparent>
      <View style={styles.container}>{children}</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, .6)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
