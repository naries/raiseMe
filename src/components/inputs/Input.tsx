import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TextInputProps,
} from 'react-native';
import React from 'react';
import {Colors} from '../../misc/colors';
import CurrencyInput from 'react-native-currency-input';
import AppText from '../Text/AppText';

type InputPropTypes = {
  title: string;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: 'input' | 'amount' | 'document-picker' | 'password';
} & TextInputProps;

const Input = ({
  title,
  value,
  onChangeText,
  type = 'input', // input | amount | document-picker
  ...rest
}: InputPropTypes) => {
  return (
    <View style={[styles.viewBox, {paddingVertical: value ? 8 : 16}]}>
      {value && <Text style={[styles.title]}>{title}</Text>}
      {type === 'document-picker' && (
        <AppText style={{color: value ? 'black' : '#888'}}>
          {value ?? title}
        </AppText>
      )}
      {(type === 'input' || type === 'password') && (
        <TextInput
          value={value}
          placeholder={!value ? title : ''}
          onChangeText={onChangeText}
          secureTextEntry={type === 'password'}
          placeholderTextColor="#888"
          {...rest}
        />
      )}
      {type === 'amount' && (
        <CurrencyInput
          delimiter=","
          onChangeValue={onChangeText as () => void}
          precision={2}
          separator="."
          style={{
            fontSize: 14,
            color: 'black',
          }}
          value={value}
          //   {...inputProps}
        />
      )}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  viewBox: {
    borderWidth: 1,
    borderColor: Colors.textInput.border,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    width: Dimensions.get('window').width - 80,
    rowGap: 4,
  },
  title: {
    color: '#888',
    fontSize: 10,
  },
});
