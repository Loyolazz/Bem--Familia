import React from 'react';
import {AuthProvider} from '../context';
import AppNav from './AppNav/AppNav';
import { StatusBar } from 'react-native';
export default function () {
  return (
      <AuthProvider>
         <StatusBar barStyle={'light-content'} backgroundColor={"#005B96"}/>
        <AppNav />
      </AuthProvider>
  );
}
