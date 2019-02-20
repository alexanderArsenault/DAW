import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Variables from '../../constants/Variables'

export default class SignUpHeader extends React.Component {
  render() {
    return (
        <Text style={styles.signupHeader}>
            {this.props.children}
        </Text>
    );
  }
}

const styles = StyleSheet.create({
    signupHeader: {
        fontSize: 28,
        textAlign: 'center',
        paddingBottom: 25,
        color: Variables.white,
        fontFamily: Variables.fontLight,
    },
});