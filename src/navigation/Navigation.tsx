import React from 'react';
import AppNavigation from './AppNavigation';
import AuthNavigation from './AuthNavigation';
import {RootState} from '../store';
import {useSelector} from 'react-redux';

const AllNavigation = () => {
  const {status} = useSelector((state: RootState) => state.app);
  return status === 'authenticated' ? <AppNavigation /> : <AuthNavigation />;
};

export default AllNavigation;
