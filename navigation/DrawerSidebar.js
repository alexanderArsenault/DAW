import React, { Component } from 'react';
import IconExit from '../components/IconExit';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import Variables from '../constants/Variables';
import { Divider } from 'react-native-elements';
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
      <SafeAreaView style={styles.container}>
        <View style={styles.headerArea}>
          <IconExit></IconExit>
        </View>

        <View style={styles.menu} forceInset={{ top: 'always', horizontal: 'never' }}>
          <Text style={styles.menuHeader}>Menu</Text>
          <Divider style={{backgroundColor: Variables.white, height: 1, marginBottom: 20,}}/>

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
        </View>
      </SafeAreaView>
    );
  }
} // Version can be specified in package.json

export default Sidebar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Variables.brand01,
    flex: 1,
  },
  menu: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    flex: 1,
  },
  menuItem:{
    color: Variables.white,
    fontSize: 21,
    fontFamily: Variables.fontLight,
    paddingBottom: 20,
  },
  menuHeader: {
    fontSize: 22,
    fontFamily: Variables.fontBold,
    textTransform: 'uppercase',
    color: Variables.white,
    paddingBottom: 20,
  },
  headerArea: {
    height: 45,
    justifyContent: 'center',
    borderBottomColor: Variables.white,
    borderBottomWidth: 1,
  }
})