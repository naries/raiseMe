import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Pages/home/Page';
import Help from '../Pages/help/Page';
import Profile from '../Pages/profile/Page';
import {AppStackList} from './types';
import ContactUs from '../Pages/contact-us/Page';
import Wallet from '../Pages/wallet/Page';
import FAQ from '../Pages/faq/Page';
import PersonalInformation from '../Pages/personal-information/Page';
import StartCampaign from '../Pages/campaign/StartCampaign';
import Details from '../Pages/details/Page';

const Stack = createNativeStackNavigator<AppStackList>();

const AppNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="help" component={Help} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="wallet" component={Wallet} />
      <Stack.Screen name="faq" component={FAQ} />
      <Stack.Screen
        name="personal-information"
        component={PersonalInformation}
      />
      <Stack.Screen name="contact-us" component={ContactUs} />
      <Stack.Screen name="start-a-campaign" component={StartCampaign} />
      <Stack.Screen name="details" component={Details} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
