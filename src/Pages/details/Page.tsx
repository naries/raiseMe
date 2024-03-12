import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import Headers from '../../components/header/Headers';
import Input from '../../components/inputs/Input';
import Main from '../../components/Buttons/Main';

const Details = () => {
  //   const {dispatch} = store;
  return (
    <View style={[styles.sorround, styles.main]}>
      <View style={{paddingHorizontal: 40}}>
        <Headers
          title="Support Ahmed's Education Fund and all that shit
"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            rowGap: 10,
            paddingVertical: 10,
            padding: 40,
          }}>
          <View style={{rowGap: 2.5}}>
            <View style={styles.imageBox}>
              <Image
                source={require('../../../assets/image_1.png')}
                style={{height: 400, width: '100%'}}
              />
            </View>
            <View style={styles.imageBox}>
              <Image
                source={require('../../../assets/image_2.png')}
                style={{height: 400, width: '100%'}}
              />
            </View>
          </View>
          <AppText>
            Ahmed is a bright and ambitious student from a low-income family in
            a rural village. Despite facing financial hardships, he has excelled
            academically and dreams of pursuing higher education to become a
            computer engineer. However, his family cannot afford the tuition
            fees and other educational expenses required to attend university.
          </AppText>
          <View style={{rowGap: 2.5}}>
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#bbb',
              }}>
              <AppText>first.pdf</AppText>
            </View>
            <View
              style={{
                padding: 10,
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#bbb',
              }}>
              <AppText>second_doc.pdf</AppText>
            </View>
          </View>
          <AppText>
            <Text style={{fontWeight: '600'}}>₦10,000</Text> until target goal
            of <Text style={{fontWeight: '600'}}>₦190,000</Text> is reached.
          </AppText>
          <AppText>Ends 2/8/2024</AppText>

          <Headers title="Donations" noBack />
          <AppText style={{color: 'green'}}>
            &#10004; You already made a donation
          </AppText>
          <Input type="amount" title="Make a donation" value="0.00" />
          <Main title="Donate" />

          <View />

          <View style={{flexDirection: 'row'}}>
            <AppText style={{color: 'green'}}>
              &#10004; You made a donation of ₦30,000
            </AppText>
            <AppText style={{color: '#666'}}> 23h ago</AppText>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AppText style={{color: 'green'}}>
              &#10004; Chelsea made a donation of ₦12500
            </AppText>
            <AppText style={{color: '#666'}}> 23h ago</AppText>
          </View>
          <View style={{flexDirection: 'row'}}>
            <AppText style={{color: 'green'}}>
              &#10004; Anonymous made a donation of ₦1000
            </AppText>
            <AppText style={{color: '#666'}}> 23h ago</AppText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  sorround: {
    flex: 1,
    backgroundColor: Colors.appBackground,
  },
  main: {paddingVertical: 20, rowGap: 20},
  topic: {
    fontSize: 20,
    fontWeight: '700',
    color: Colors.primary,
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
  imageBox: {
    backgroundColor: '#ccc',
    width: '100%',
    height: 400,
    borderRadius: 8,
    overflow: 'hidden',
  },
});

export default Details;
