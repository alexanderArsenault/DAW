import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView, withNavigation } from 'react-navigation';
import Colors from '../../constants/Variables'

import ButtonLoginContinue from '../ButtonLoginContinue';

class SignUpCard extends React.Component {
  render() {
    return (
        <SafeAreaView style={styles.screen}>
            {this.props.children}
            <ButtonLoginContinue style={styles.continue} onPress={ () => this.props.navigation.navigate(this.props.nextPage)}> </ButtonLoginContinue>
        </SafeAreaView>
    );
  }
}

export default withNavigation(SignUpCard);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.brand01
  },
});