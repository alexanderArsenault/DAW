import React from 'react';
import { Platform } from 'react-native';
import { Icon } from 'expo';
import { withNavigation, DrawerActions } from 'react-navigation';

import Colors from '../constants/Colors';

class NavigationIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={
            Platform.OS === 'ios'
            ? `ios-menu`
            : 'md-menu'
        }
        onPress={() => {this.props.navigation.dispatch(DrawerActions.openDrawer())}}
        size={30}
        style={{ paddingHorizontal: 15}}
        color={Colors.tabIconDefault}
      />
    );
  }
}

export default withNavigation(NavigationIcon);