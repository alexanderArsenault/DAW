import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import { SafeAreaView } from 'react-navigation';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'CONTACT',
    headerLeft: (
        <NavigationIcon />
    ),
  };

  render() {
    return (
      <Text>What up Bruh - Contact</Text>        
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});