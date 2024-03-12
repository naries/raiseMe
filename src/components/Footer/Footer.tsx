import {View} from 'react-native';
import React from 'react';
import AppText from '../Text/AppText';

const Footer = () => {
  return (
    <View>
      <AppText style={{fontSize: 12}}>Property of Mayokun Ajiboye</AppText>
      <AppText style={{fontSize: 12}}>All rights reserved</AppText>
      <AppText style={{fontSize: 12}}>&copy; 2024 </AppText>
    </View>
  );
};

export default Footer;
