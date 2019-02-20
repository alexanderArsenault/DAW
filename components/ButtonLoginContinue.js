import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Variables from '../constants/Variables'

export default class ButtonLoginContinue extends React.Component {
    render() {
        return (
            <View style={styles.btncontainer}>
                <TouchableOpacity
                    style={styles.btn}
                    onPress={this.props.onPress}>
                        <Text style={styles.btntext}>Continue</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btncontainer: {
        flex: 0,
        alignSelf: 'stretch',
        justifyContent: 'flex-end',

        color: Variables.white,
        backgroundColor: Variables.brand01,
    },
    btn: {
        borderTopWidth: 1,
        borderColor: Variables.white,
    },
    btntext: {
        paddingVertical: 15,
        color: Variables.white,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: Variables.fontRegular,
        fontSize: 20,
    }
})