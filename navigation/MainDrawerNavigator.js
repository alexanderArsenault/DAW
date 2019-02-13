import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import DrawerSidebar from './DrawerSidebar';
import ProfileScreen from '../screens/ProfileScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ContactScreen from '../screens/ContactScreen';
import Colors from '../constants/Colors'
import MainTabNavigator from './MainTabNavigator';


const ProfileStack = createStackNavigator(
  {
    Profile: ProfileScreen,
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

const ContactStack = createStackNavigator(
  {
    Contact: ContactScreen,
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

const NotificationsStack = createStackNavigator(
  {
    Notifications: NotificationsScreen,
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

const LogoutStack = createStackNavigator(
  {
    Logout: ProfileScreen,
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

const Drawer = createDrawerNavigator(
  {
    Home: {screen: MainTabNavigator},
    ContactStack,
    NotificationsStack,
    ProfileStack,
    LogoutStack,
  },
  {
    contentComponent: DrawerSidebar, // navigation goes here
    drawerWidth: Dimensions.get('window').width - 125,
  }
);

export default Drawer