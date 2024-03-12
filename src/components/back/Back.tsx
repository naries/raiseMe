import {View, Text, TouchableWithoutFeedback} from 'react-native';
import React from 'react';
import AppText from '../Text/AppText';
import {useNavigation} from '@react-navigation/native';

const Back = () => {
  const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
      <View>
        <AppText style={{fontWeight: '500', color: '#824'}}>Back</AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Back;
