import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignIn from '../Pages/signin/Page';
import {AuthStackList} from './types';

const Stack = createNativeStackNavigator<AuthStackList>();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="sign-in"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="sign-in" component={SignIn} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
