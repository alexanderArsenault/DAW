import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import Variables from '../../constants/Variables'


class SignUpCard extends React.Component {
  render() {
    return (
      <View style={styles.card}>
        <TouchableOpacity>
            {this.props.children}
        </TouchableOpacity>
      </View>
    );
  }
}

export default withNavigation(SignUpCard);

const styles = StyleSheet.create({
  card: {
      borderWidth: 1,
      borderColor: Variables.brand01,
      padding: 15,
      paddingTop: 15,
      paddingBottom: 20,
      marginBottom: -1,
  },
});