import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../Text/AppText';

const Error = ({touched, error}: {touched: boolean; error: string}) => {
  return (
    touched &&
    error && (
      <View style={styles.error}>
        <AppText style={styles.text}>{error}</AppText>
      </View>
    )
  );
};

export default Error;

const styles = StyleSheet.create({
  error: {},
  text: {
    color: 'red',
  },
});
