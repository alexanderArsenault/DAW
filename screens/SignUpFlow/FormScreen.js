import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import Colors from '../../constants/Variables'
import TextInputDAW from '../../components/TextInputDAW'
 
import { SignUpHeader, SignUpCard } from '../../components/SignUpFlow'

export default class FormScreen extends React.Component {
    state = {
      organization: '',
      firstname: '',
      lastname:'',
      dateofbirth:'',
      email:'',
      mobilenumber:'',
      password: '',
      retypepassword:'',
    };

    render() {
      let { organization, firstname, lastname, dateofbirth, email, mobilenumber, password, retypepassword } = this.state;

      return (
        <SignUpCard
        nextPage='GetAddress'>

          <SignUpHeader>I NEED STAFF</SignUpHeader>
          <View style={styles.formContainer}>  
            <ScrollView ContentContainerStyle={styles.formWrapper}>
              <TextInputDAW
                label='Organization...'
                value={organization}
                onChangeText={ (organization) => this.setState({ organization }) }
              />

              <TextInputDAW
                label='First Name...'
                value={firstname}
                onChangeText={ (firstname) => this.setState({ firstname }) }
              />

              <TextInputDAW
                label='Last Name...'
                value={lastname}
                onChangeText={ (lastname) => this.setState({ lastname }) }
              />

              <TextInputDAW
                label='Date of Birth...'
                value={dateofbirth}
                keyboardType='number-pad'
                onChangeText={ (dateofbirth) => this.setState({ dateofbirth }) }
              />

              <TextInputDAW
                label='Email address...'
                value={email}
                onChangeText={ (email) => this.setState({ email }) }
              />

              <TextInputDAW
                label='Mobile number...'
                value={mobilenumber}
                keyboardType='number-pad'
                onChangeText={ (mobilenumber) => this.setState({ mobilenumber }) }
              />

              <TextInputDAW
                label='Password...'
                value={password}
                onChangeText={ (password) => this.setState({ password }) }
              />

              <TextInputDAW
                label='Retype Password...'
                value={retypepassword}
                onChangeText={ (retypepassword) => this.setState({ retypepassword }) }
              />
            </ScrollView>
          </View>
        </SignUpCard>
      )
  }

  _consolelognext = () => {
    console.log(this.state);
    this.props.navigation.navigate('GetAddress');
  }
}


const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.brand01,
  },
  formWrapper: {
      flex: 1,
      alignSelf: 'stretch',
  },
  formContainer: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
});