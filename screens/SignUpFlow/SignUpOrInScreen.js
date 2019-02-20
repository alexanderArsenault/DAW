import React from 'react';
import { LinearGradient } from 'expo';
import {
  AsyncStorage,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Variables from '../../constants/Variables'
import { SafeAreaView } from 'react-navigation';
import Button from '../../components/Button'


export default class SignInScreen extends React.Component {
  
    render() {
      return (
        <ImageBackground source={require('../../assets/images/homesplash.jpeg')} style={{flex: 1}}>
          <LinearGradient
            colors={['transparent', 'rgba(255,255,255,0.9)']}
            start={[0, 0]}
            end={[0,0.8]}
            location={[0, 0.2]}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              height: '100%',
            }}
          />
          <SafeAreaView style={styles.screen}>
            <Image source={require('../../assets/images/logo.png')}></Image>
            <Text style={styles.header}>Service with a smile</Text>
            <View style={styles.buttoncontainer}>
              <Button backgroundColor={Variables.brand01} onPress={ () => this.props.navigation.navigate('Greeting') }>I NEED STAFF </Button>
              <Button backgroundColor={Variables.brand02} onPress={ () => this.props.navigation.navigate('Greeting') }>I NEED WORK </Button>

              <TouchableOpacity onPress={ () => this.props.navigation.navigate('Greeting') }>
                <Text style={styles.signin}>Already a member?</Text>
              </TouchableOpacity>
              
            </View>
          </SafeAreaView>
        </ImageBackground>
      );
    }
}

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'flex-end',
    alignItems: 'center', 
    flex: 1,
    padding: 20,
  },
  buttoncontainer: {
    alignSelf: 'stretch',
  },
  header: {
    fontFamily: Variables.fontMedium,
    color: Variables.brand01,
    fontSize: 35,
    paddingHorizontal: 80,
    paddingBottom: 60,
    textAlign: 'center',
  },
  signin: {
    fontSize: 14,
    paddingTop: 10,
    textAlign: 'center',
    color: Variables.brand01,
    fontFamily: Variables.fontMedium,
  }
})