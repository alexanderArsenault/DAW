import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainDrawerNavigator from './MainDrawerNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';
import SignUpOrInNavigator from './SignUpNavigator';

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: MainDrawerNavigator,
    Auth: SignUpOrInNavigator,
  },
  {
    // initialRouteName: 'AuthLoading'
    initialRouteName: 'App'
  }
));
