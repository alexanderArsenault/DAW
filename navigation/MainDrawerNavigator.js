import React from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import DrawerSidebar from './DrawerSidebar';

import ProfileScreen from '../screens/DrawerPages/ProfileScreen';
import NotificationsScreen from '../screens/DrawerPages/NotificationsScreen';
import ContactScreen from '../screens/DrawerPages/ContactScreen';
import MainTabNavigator from './MainTabNavigator';

import NavigationIcon from '../components/IconMenu';
import BackToHomeIcon from '../components/IconBackToHome';

import Colors from '../constants/Variables'

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
  headerLeft: (
    <BackToHomeIcon />
  )
}

const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
  },
  {
    defaultNavigationOptions,
  }
);


const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen
  },
  {
    defaultNavigationOptions,
  }
);


const NotificationsStack = createStackNavigator(
  {
    Notifications: NotificationsScreen
  },
  {
    defaultNavigationOptions,
  }
);


const LogoutStack = createStackNavigator(
  {
    Logout: ProfileScreen,
  },
  {
    defaultNavigationOptions,
  }
);

const Drawer = createDrawerNavigator(
  {
    Home: {screen: MainTabNavigator},
    ContactStack,
    NotificationsStack,
    ProfileStack,
    LogoutStack,
  },
  {
    contentComponent: DrawerSidebar,
    drawerWidth: Dimensions.get('window').width - 125,
  }
);

export default Drawer