import React from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { SignUpCard, SignUpHeader, SignUpBody, SignUpText } from '../../components/SignUpFlow';
import { Location, Permissions } from 'expo';

import Variables from '../../constants/Variables'
import ButtonDAW from '../../components/ButtonDAW'

export default class GetAddressScreen extends React.Component {

  state = {
    // location is raw location data
    location: null,
    errorMessage: null,
    hasLocationPermissions: false,
    locationResult: false,
    loading: false,
  }

  render() {

    let locationResult = this.state.location;
    let screen;

    if (this.state.loading){
      screen = this.loadingSpinnerUI();
    } else if (this.state.hasLocationPermissions && typeof locationResult === "string"){
      screen = this.locationResultUI();
    } else if (this.state.hasLocationPermissions && typeof locationResult === null) {
      screen = <Text>Loading</Text>;
    } else {
      screen = this.askPermissionUI();
    }

    return (
      <SignUpCard
      nextPage='AccountValidation'>
        {screen}
      </SignUpCard>
    );
  }

  askPermissionUI(){
    return (
      <SignUpText>
        <SignUpHeader>What is your address?</SignUpHeader>
        <SignUpBody>By providing your address, we'll be able to provide you with jobs relevant to your location.</SignUpBody>
        <ButtonDAW onPress={ () => this._getLocationAsync() }>Allow App to Find me</ButtonDAW>
      </SignUpText>
    )
  }

  locationResultUI(){
    return (
      <SignUpText>
        <SignUpBody>You live in: </SignUpBody>
        <SignUpHeader>{this.state.location}</SignUpHeader>
        <SignUpBody>Is this correct?</SignUpBody>
        <ButtonDAW onPress={ () => this._getLocationAsync() }>Try Again</ButtonDAW>
      </SignUpText>
    );
  }

  loadingSpinnerUI(){
    return (
      <SignUpText>
        <ActivityIndicator size="large" color={Variables.white} />
      </SignUpText>
    );
  }

  _getLocationAsync = async () => {

    this.setState({
        location: null,
        errorMessage: null,
        hasLocationPermissions: false,
        locationResult: false,
        loading: true,
    })

    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    } else {
      this.setState({
        hasLocationPermissions: true,
      })
    }

    let location = await Location.getCurrentPositionAsync({});

    const geocordinateAPI = 'AIzaSyDrpp7nM-9DFhSOhxppFw63tTsxAZvL76g'

    await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.coords.latitude},${location.coords.longitude}&result_type=locality&key=${geocordinateAPI}`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          location: responseJson.results[0].address_components[0].long_name
        });
      })
      .catch((error) => {
        this.setState({
          errorMessage: error
        })
      })
    this.setState({
      loading: false,
    })
  };
}