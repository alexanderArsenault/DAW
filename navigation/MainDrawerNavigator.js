import { createStackNavigator, createDrawerNavigator } from 'react-navigation';
import { Dimensions } from 'react-native';
import Sidebar from './DrawerSidebar';
import ProfileScreen from '../screens/ProfileScreen';

// main screen config
const DrawerMenu = createStackNavigator({
  Profile: { screen: ProfileScreen },
  Notifcations: { screen: ProfileScreen },
  Contact: { screen: ProfileScreen },
  Logout: { screen: ProfileScreen },
});

const Drawer = createDrawerNavigator(
  {
    Main: { screen: DrawerMenu },
  },
  {
    contentComponent: Sidebar, // navigation goes here
    drawerWidth: 250,
  }
);

export default Drawer