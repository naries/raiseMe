import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TextInputProps,
  ActionSheetIOS,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Colors} from '../../misc/colors';
import AppText from '../Text/AppText';
import ActionSheet, {ActionSheetRef} from 'react-native-actions-sheet';

type SelectPropTypes = {
  title: string;
  value?: string;
  onChangeText?: (text: string) => void;
  isPassword?: boolean;
  list: {value: string; label: string}[];
} & TextInputProps;

const Select = ({
  title,
  value,
  list,
  onChangeText,
  isPassword = false,
  ...rest
}: SelectPropTypes) => {
  const actionSheetRef = useRef<ActionSheetRef>(null);
  const [status, setStatus] = useState('inactive');
  const onPress = () => {
    if (status === 'inactive') {
      actionSheetRef.current?.show();
      setStatus('active');
      return;
    }
    actionSheetRef.current?.hide();
    setStatus('inactive');
  };
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.viewBox, {paddingVertical: value ? 8 : 16}]}>
        {value && <Text style={[styles.title]}>{title}</Text>}
        <View>
          <AppText>
            {list.find(({value: val}) => val === value)?.label ?? title}
          </AppText>
        </View>
        <ActionSheet ref={actionSheetRef}>
          <View style={{marginBottom: 50}}>
            {list.map(({value: v, label}) => (
              <TouchableWithoutFeedback
                key={v}
                onPress={() => {
                  onChangeText(v);
                  onPress();
                }}>
                <View
                  style={{
                    padding: 14,
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'row',
                    columnGap: 10,
                  }}>
                  {v === value && (
                    <View
                      style={{
                        height: 8,
                        width: 8,
                        borderWidth: 2,
                        borderColor: '#08d',
                        backgroundColor: 'transparent',
                        borderRadius: 10,
                      }}
                    />
                  )}
                  <AppText
                    style={{textAlign: 'center', fontSize: 16, color: '#08d'}}>
                    {label}
                  </AppText>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ActionSheet>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Select;

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
