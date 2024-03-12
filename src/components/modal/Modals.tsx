import React from 'react';
import {Dimensions, Modal, StyleSheet, View} from 'react-native';
import AppText from '../Text/AppText';
import {useSelector} from 'react-redux';
import {RootState, store} from '../../store';

const AppModal = () => {
  const {status, message, navigationTarget} = useSelector(
    (state: RootState) => state.app.modal,
  );
  return (
    <Modal visible={status !== 'idle'} transparent>
      <View style={styles.modalView}>
        <View style={styles.innerModalView}>
          <AppText style={{fontSize: 18}}>
            {status === 'success' && <>&#10004;</>}
            {status === 'error' && <>&times;</>}{' '}
            {status === 'success' && 'Success'}
            {status === 'error' && 'Error'}
          </AppText>
          <AppText>{message}</AppText>
          <AppText style={{fontSize: 10, color: '#888'}}>
            Vanishing in 5 seconds
          </AppText>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  innerModalView: {
    flex: 0.115,
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 80,
    borderRadius: 10,
    padding: 20,
    rowGap: 20,
  },
});

export default AppModal;
