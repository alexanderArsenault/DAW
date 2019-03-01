import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Variables'

export default class ButtonDAW extends React.Component {
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.buttonContainer}>
                    <Text style={[styles.button, {backgroundColor: this.props.backgroundColor}]}> {this.props.children}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        fontSize: 22,
        marginBottom: 10,
        color: Colors.white,
        textAlign: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    buttonContainer:{
        alignSelf: 'stretch',
    }
})