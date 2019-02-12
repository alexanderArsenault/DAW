import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

/**
 *  Drawer or Sidebar
 */
export class Sidebar extends Component {
  // navigate to name
  _goTo(name) {
    this.props.navigation.navigate(name);
  }
  

  /**
   * You can use map to list projects
   * But for simple demo use this method
   */
  render() {
    return (
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._goTo('Profile')}>
          <Text> Project 01</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._goTo('Profile')}>
          <Text> Project 02</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => this._goTo('Profile')}>
          <Text> Project 03</Text>
        </TouchableOpacity>
      </View>
    );
  }
} // Version can be specified in package.json