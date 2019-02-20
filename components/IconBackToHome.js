import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import { withNavigation } from 'react-navigation';

import Colors from '../constants/Variables';

class NavigationIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={
            Platform.OS === 'ios'
            ? `ios-home`
            : 'md-home'
        }
        onPress={() => { this.props.navigation.navigate('Home')}}
        size={30}
        style={{ paddingHorizontal: 15}}
        color={Colors.tabIconDefault}
      />
    );
  }
}

export default withNavigation(NavigationIcon);