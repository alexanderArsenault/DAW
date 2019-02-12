import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import React from 'react';
import { Platform } from 'react-native';

//  Bottom Bar Screens
import HomeScreen from '../screens/HomeScreen';
import EarningsScreen from '../screens/EarningsScreen';
import AccountScreen from '../screens/AccountScreen';
import TabBarIcon from '../components/TabBarIcon';

import Colors from '../constants/Colors';


// createStackNavigator Provides a way for your app to transition between screens where each new screen is placed on top of a stack.

// Home Stack
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brand01,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '300',
      },
    }
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home`
          : 'md-home'
      }
    />
  ),
};


// Earnings Stack
const EarningsStack = createStackNavigator(
  {
    Earnings: EarningsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brand01,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '300',
      },
    }
  }
);

EarningsStack.navigationOptions = {
  tabBarLabel: 'Earnings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-card`
          : 'md-card'
      }
    />
  ),
};


// Account Stack
const AccountStack = createStackNavigator(
  {
    Account: AccountScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.brand01,
      },
      headerTintColor: Colors.white,
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: '300',
      },
    }
  }
);

AccountStack.navigationOptions = {
  tabBarLabel: 'Account',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact`
          : 'md-contact'
      }
    />
  ),
};


export default createBottomTabNavigator(
  {
    Home: HomeStack,
    Earnings: EarningsStack,
    Account: AccountStack,
  },
  {
    initialRouteName: 'Home',

    tabBarOptions: {
      labelStyle: {
        color: Colors.white,
        textTransform: 'uppercase',
        fontSize: 13,
      },
      tabStyle: {
        paddingTop: 1,
        paddingBottom: 8
      },
      style: {
        backgroundColor: Colors.brand01,
        height: 60,
      },
      activeBackgroundColor: Colors.brand01Dark,
      inactiveBackgroundColor: Colors.brand01
    }
  }
);