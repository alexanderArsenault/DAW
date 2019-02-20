// import React from 'react';
import { createStackNavigator } from 'react-navigation';

import SignUpOrInScreen from '../screens/SignUpFlow/SignUpOrInScreen';
import GreetingScreen from '../screens/SignUpFlow/GreetingScreen';
import FormScreen from '../screens/SignUpFlow/FormScreen';
import GetAddressScreen from '../screens/SignUpFlow/GetAddressScreen';
import AccountValidationScreen from '../screens/SignUpFlow/AccountValidationScreen';
import RegistrationSuccessScreen from '../screens/SignUpFlow/RegistrationSuccessScreen';

const SignInStack = createStackNavigator(
  {
    SignUpOrIn: {
        screen: SignUpOrInScreen,
    },
    Greeting: {
        screen: GreetingScreen,
    },
    Form: {
        screen: FormScreen,
    },
    GetAddress: {
        screen: GetAddressScreen,
    },
    AccountValidation: {
        screen: AccountValidationScreen,
    },
    RegistrationSuccess: {
        screen: RegistrationSuccessScreen,
    },
  },
  {
      initialRouteName: 'SignUpOrIn',
      headerMode: 'none',
  }
);

export default SignInStack