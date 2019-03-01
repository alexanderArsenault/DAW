import React from 'react';
import { Text, StyleSheet } from 'react-native';
import Variables from '../../constants/Variables'

export default class ScrollHeader extends React.Component {
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
        fontSize: 20,
        paddingBottom: 10,
        color: Variables.brand01,
        fontFamily: Variables.fontRegular,
    },
});