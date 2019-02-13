import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import NavigationIcon from '../components/NavigationIcon';


export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'MY ACCOUNT',
    headerLeft: (
        <NavigationIcon />
    ),
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
