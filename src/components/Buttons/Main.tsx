import {
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Colors} from '../../misc/colors';
import AppText from '../Text/AppText';

type ButtonPropType = {
  title: string;
  width?: number;
  onPress: () => void;
  isLoading: boolean;
};

const Main = ({
  title,
  width = Dimensions.get('window').width - 80,
  onPress = () => {},
  isLoading = false,
}: ButtonPropType) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={[
          isLoading ? styles.loadingButtonView : styles.buttonView,
          {width},
        ]}>
        <AppText
          style={[isLoading ? styles.loadingButtonText : styles.buttonText]}>
          {title}
        </AppText>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Main;

const styles = StyleSheet.create({
  buttonView: {
    backgroundColor: Colors.secondary,
    padding: 14,
    borderRadius: 8,
  },
  loadingButtonView: {
    backgroundColor: 'transparent',
    padding: 14,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },
  loadingButtonText: {
    color: Colors.secondary,
    fontWeight: '700',
    textAlign: 'center',
  },
});
