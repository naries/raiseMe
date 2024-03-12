import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import {useNavigation} from '@react-navigation/native';
import {AppStackList} from '../../navigation/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Footer from '../../components/Footer/Footer';

const Home = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackList, 'home'>>();
  //   const {dispatch} = store;
  return (
    <View style={[styles.sorround, styles.main]}>
      <View style={{rowGap: 2}}>
        <AppText style={styles.topic}>Raise 4 Me</AppText>
        <AppText style={{fontSize: 12}}>
          Help real people with real problems
        </AppText>
      </View>
      <View style={{rowGap: 10}}>
        <View style={styles.imageBox}>
          <Image
            source={require('../../../assets/image_1.png')}
            style={{height: 100, width: '100%'}}
          />
        </View>
        <View>
          <AppText style={styles.titleText}>
            294 people have now helped Olanrewaju
          </AppText>
        </View>
        <View>
          <AppText>
            My brother just lost his job and he just can't stand for himself
            any...
          </AppText>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          columnGap: 20,
          justifyContent: 'space-between',
          //   flexWrap: 'wrap',
        }}>
        <View style={{rowGap: 10, flex: 1}}>
          <View style={styles.subImageBox}>
            <Image
              source={require('../../../assets/image_1.png')}
              style={{height: 70, width: '100%'}}
            />
          </View>
          <View>
            <AppText>294 people have now</AppText>
          </View>
        </View>
        <View style={{rowGap: 10, flex: 1}}>
          <View style={styles.subImageBox}>
            <Image
              source={require('../../../assets/image_2.png')}
              style={{height: 70, width: '100%'}}
            />
          </View>
          <View>
            <AppText>294 people have now helped</AppText>
          </View>
        </View>
      </View>

      <View style={{rowGap: 14}}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('help')}>
          <View style={styles.linkBar}>
            <AppText>Help Someone</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('start-a-campaign')}>
          <View style={styles.linkBar}>
            <AppText>Start a campaign</AppText>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('profile')}>
          <View style={styles.linkBar}>
            <AppText>Your profile</AppText>
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
    rowGap: 20,
    backgroundColor: Colors.appBackground,
  },
  linkBar: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    borderRadius: 8,
  },
  imageBox: {
    backgroundColor: '#aaa',
    overflow: 'hidden',
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  subImageBox: {
    backgroundColor: '#aaa',
    height: 70,
    borderRadius: 8,
    width: (Dimensions.get('window').width - 100) / 2,
    overflow: 'hidden',
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
    fontSize: 18,
    fontWeight: '700',
    color: '#824',
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

export default Home;
