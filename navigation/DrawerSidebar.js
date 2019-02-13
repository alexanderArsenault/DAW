import React, { Component } from 'react';
import { Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import Colors from '../constants/Colors';

export class Sidebar extends Component {

  // navigate to name
  _goTo(name) {
    console.log(this.props.navigation);
    this.props.navigation.navigate(name);
  }

  render() {
    return (
      <ScrollView style={styles.menu}>
        <SafeAreaView  forceInset={{ top: 'always', horizontal: 'never' }}>
        
          <TouchableOpacity
            onPress={() => this._goTo('Home')}>
            <Text style={styles.menuItem}>Home</Text>
          </TouchableOpacity>

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
            onPress={() => this._goTo('Profile')}>
            <Text 
              style={styles.menuItem}>Log Out</Text>
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