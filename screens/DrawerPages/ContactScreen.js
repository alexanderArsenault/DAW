import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-navigation';

export default class ContactScreen extends React.Component {
  static navigationOptions = {
    title: 'CONTACT',

  };

  render() {
    return (
      <SafeAreaView>
        <Text>What up Bruh - Contact</Text>        
      </SafeAreaView>
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