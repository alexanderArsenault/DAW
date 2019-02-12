import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import NavigationIcon from '../components/NavigationIcon';


export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'MY ACCOUNT',
    headerRight: (
        <NavigationIcon />
    ),
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
