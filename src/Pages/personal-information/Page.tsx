import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import Headers from '../../components/header/Headers';
import {Colors} from '../../misc/colors';
import AppText from '../../components/Text/AppText';
import Input from '../../components/inputs/Input';
import Select from '../../components/inputs/Select';
import Footer from '../../components/Footer/Footer';

const PersonalInformation = () => {
  const [location, setLocation] = useState('');
  return (
    <View style={[styles.sorround, styles.main]}>
      <Headers title="Personal Information"/>
      <View style={{rowGap: 10}}>
        <Input title="First Name" value="Mayokun" />
        <Input title="Last Name" value="Ajiboye" />
        <Input title="Phone" value="+2349031855132" />
        <Input title="Email Address" value="phynormynal@gmail.com" />
        <Input
          title="Short Bio"
          value="This is a text that would span multiline and all that stuff"
          multiline
        />
        <Select
          title="Location"
          value={location}
          onChangeText={(value: string) => {
            setLocation(value);
          }}
          list={[
            {label: 'Nigeria', value: 'nigeria'},
            {label: 'Ghana', value: 'ghana'},
          ]}
        />
      </View>
      {/* <Headers title="Ban" noBack /> */}
      <Footer />
    </View>
  );
};

export default PersonalInformation;

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
