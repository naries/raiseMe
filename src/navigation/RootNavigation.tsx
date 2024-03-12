import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AllNavigation from './Navigation';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <AllNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
