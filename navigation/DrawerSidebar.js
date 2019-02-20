import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Colors from '../constants/Variables';

export class Sidebar extends Component {

  // navigate to name
  _goTo(name) {
    this.props.navigation.navigate(name);
  }

  _signOutAsync = async () => {
    // Sign out Modal
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <ScrollView style={styles.menu}>
        <SafeAreaView  forceInset={{ top: 'always', horizontal: 'never' }}>

          <TouchableOpacity
            onPress={() => this._goTo('Profile')}>
            <Text style={styles.menuItem}>Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._goTo('Notifications')}>
            <Text style={styles.menuItem}>Notifcations</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => this._goTo('Contact')}>
            <Text style={styles.menuItem}>Contact</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this._signOutAsync()}>
            <Text style={styles.menuItem}>Log Out</Text>
          </TouchableOpacity>

        </SafeAreaView>
     </ScrollView>
    );
  }
} // Version can be specified in package.json

export default Sidebar;

const styles = StyleSheet.create({
  menu: {
    backgroundColor: Colors.brand01,
    flex:1,
    padding: 20,
  },
  menuItem:{
    color: Colors.white,
    fontSize: 20,
    paddingBottom: 10,
  },
})