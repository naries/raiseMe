import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TextInputProps,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../misc/colors';

import DatePicker from 'react-native-date-picker';
import AppText from '../Text/AppText';
import moment from 'moment';

type DatePropTypes = {
  title: string;
  value?: Date & string;
  onChangeText: (text?: Date & string) => void;
} & TextInputProps;

const DateInput = ({title, value, onChangeText, ...rest}: DatePropTypes) => {
  const [open, setOpen] = useState(false);
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setOpen(true);
      }}>
      <View style={[styles.viewBox, {paddingVertical: value ? 8 : 16}]}>
        {value && <Text style={[styles.title]}>{title}</Text>}
        {value && <AppText>{moment(value).format('l')}</AppText>}
        <DatePicker
          modal
          open={open}
          date={value}
          mode="date"
          onConfirm={date => {
            setOpen(false);
            onChangeText(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default DateInput;

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
