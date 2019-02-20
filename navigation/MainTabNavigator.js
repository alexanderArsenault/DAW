import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import React from 'react';
import { Platform } from 'react-native';

import HomeScreen from '../screens/HomePages/HomeScreen';
import EarningsScreen from '../screens/HomePages/EarningsScreen';
import AccountScreen from '../screens/HomePages/AccountScreen';
import TabBarIcon from '../components/IconTabBar';

import NavigationIcon from '../components/IconMenu';

import Colors from '../constants/Variables';

// Default Nav Settings
const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.brand01,
  },
  headerTintColor: Colors.white,
  headerTitleStyle: {
    fontSize: 20,
    fontWeight: '300',
  },
  headerRight: (
    <NavigationIcon />
  ),
}

// Home Stack
const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    defaultNavigationOptions,
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
    defaultNavigationOptions,
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
    defaultNavigationOptions,
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