import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Variables from '../../constants/Variables'

export default class SignUpHeader extends React.Component {
  render() {
    return (
        <Text style={styles.signupBody}>
            {this.props.children}
        </Text>
    );
  }
}

const styles = StyleSheet.create({
    signupBody: {
        color: Variables.white,
        textAlign: 'center',
        paddingBottom: 20,
        fontFamily: Variables.fontRegular,
        fontSize: 16,
    },
});