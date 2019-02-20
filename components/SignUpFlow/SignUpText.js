import React from 'react';
import { StyleSheet, View } from 'react-native';

export default class SignUpCard extends React.Component {
  render() {
    return (
        <View style={styles.textarea}>
            {this.props.children}
        </View>
    );
  }
}


const styles = StyleSheet.create({
  textarea: {
      flex: 1,
      alignSelf: 'stretch',
      justifyContent: 'center',
      paddingHorizontal: 60,
  },
});