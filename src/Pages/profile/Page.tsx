import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AppStackList} from '../../navigation/types';
import Footer from '../../components/Footer/Footer';
import Headers from '../../components/header/Headers';
import {store} from '../../store';

const Profile = () => {
  const {dispatch} = store;
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackList, 'profile'>>();
  return (
    <View style={[styles.sorround, styles.main]}>
      <Headers title="Profile" />

      <View style={{rowGap: 14}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('wallet')}>
          <View style={styles.linkBar}>
            <AppText style={{fontSize: 14}}>Wallet</AppText>
            <AppText style={{fontSize: 12, color: '#444'}}>
              View, Add more to your wallet
            </AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('personal-information')}>
          <View style={styles.linkBar}>
            <AppText style={{fontSize: 14}}>Personal Information</AppText>
            <AppText style={{fontSize: 12, color: '#444'}}>
              View, Add more to your wallet
            </AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('faq')}>
          <View style={styles.linkBar}>
            <AppText style={{fontSize: 14}}>FAQ</AppText>
            <AppText style={{fontSize: 12, color: '#444'}}>
              Learn what the app is about
            </AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('contact-us')}>
          <View style={styles.linkBar}>
            <AppText style={{fontSize: 14}}>Contact Us</AppText>
            <AppText style={{fontSize: 12, color: '#444'}}>
              Our email, phone so you can reach us
            </AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() =>
            dispatch({
              type: 'app/logout',
            })
          }>
          <View style={styles.linkBar}>
            <AppText style={{fontSize: 14}}>Logout</AppText>
          </View>
        </TouchableWithoutFeedback>
      </View>

      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  main: {
    padding: 40,
    paddingVertical: 20,
    rowGap: 20,
  },
  topic: {
    fontSize: 16,
    fontWeight: '700',
  },
  linkBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    borderRadius: 8,
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

export default Profile;
