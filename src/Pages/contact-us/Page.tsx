import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import {useNavigation} from '@react-navigation/native';
import {AppStackList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Footer from '../../components/Footer/Footer';
import CurrencyInput from 'react-native-currency-input';
import Main from '../../components/Buttons/Main';
import {Formik} from 'formik';
import Headers from '../../components/header/Headers';

const ContactUs = () => {
  //   const {dispatch} = store;
  return (
    <View style={[styles.sorround, styles.main]}>
      <Headers title="Wallet" />
      <View style={{rowGap: 10}}>
        <View>
          <AppText>Email: Phynormynal@gmail.com</AppText>
        </View>
        <View>
          <AppText>Call us: +234903185513</AppText>
        </View>

        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    rowGap: 20,
    backgroundColor: Colors.appBackground,
  },
  viewBox: {
    borderWidth: 1,
    borderColor: Colors.textInput.border,
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    width: Dimensions.get('window').width - 80,
    rowGap: 4,
  },
  linkBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    borderRadius: 8,
  },
  imageBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#aaa',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    height: 100,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subImageBox: {
    backgroundColor: '#aaa',
    height: 70,
    borderRadius: 8,
    width: (Dimensions.get('window').width - 100) / 2,
  },
  main: {
    padding: 40,
    paddingVertical: 20,
  },
  titleText: {
    fontSize: 16,
    fontWeight: '500',
  },
  topic: {
    fontSize: 16,
    fontWeight: '700',
  },
  sub: {
    fontSize: 14,
    fontWeight: '400',
  },
  topMargin: {
    marginTop: 10,
  },
  rememberMe: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default ContactUs;
