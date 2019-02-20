import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import Colors from '../constants/Variables'

export default class ButtonDAW extends React.Component {
    render(){
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.button}> {this.props.children}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        fontSize: 15,
        color: Colors.white,
        textAlign: 'center',
        borderWidth: 1,
        borderColor: Colors.white,
        paddingVertical: 10,
        paddingHorizontal: 20,
        flex: 0,
        alignSelf: 'flex-start'
    },
    buttonContainer:{
        alignSelf: 'center'
    }
})