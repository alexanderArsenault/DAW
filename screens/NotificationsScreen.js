import React from 'react';
import { Text, StyleSheet } from 'react-native';
import NavigationIcon from '../components/NavigationIcon';
import { SafeAreaView } from 'react-navigation';


export default class NotificationsScreen extends React.Component {
  static navigationOptions = {
    title: 'NOTIFICATIONS',
    headerLeft: (
        <NavigationIcon />
    ),
  };

  render() {
    return (
      <SafeAreaView>
        <Text>What up Bruh</Text>
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