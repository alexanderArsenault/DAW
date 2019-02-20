import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';


// REDUX 

// You have to wrap the root component (the switch navigator) inside Provider to make the store available to all container components.

// const SwitchRouteConfig = {
//   AuthLoading: AuthLoadingScreen,
//   Authenticated: AppStackNavigator,
//   NotAuthenticated: AuthStackNavigator,
// }

// const SwitchConfig = {
//   initialRouteName: 'AuthLoading',
// }

// const Navigator = createSwitchNavigator(SwitchRouteConfig, SwitchConfig);


// // You can use a stateless component here if you want
// export default class Root extends React.PureComponent {
//    render() {
//      return (
//         <Provider store={store}> 
//            <Navigator />
//         </Provider >
//      );
//    }

// }


export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="light-content" />}
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/homesplash.jpeg'),
        require('./assets/images/logo.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,

        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        
        'work-sans-bold': require('./assets/fonts/WorkSans-Bold.ttf'),
        'work-sans-extrabold': require('./assets/fonts/WorkSans-ExtraBold.ttf'),
        'work-sans-light': require('./assets/fonts/WorkSans-Light.ttf'),
        'work-sans-extralight': require('./assets/fonts/WorkSans-ExtraLight.ttf'),
        'work-sans-medium': require('./assets/fonts/WorkSans-Medium.ttf'),
        'work-sans-regular': require('./assets/fonts/WorkSans-Regular.ttf'),
        'work-sans-semibold': require('./assets/fonts/WorkSans-SemiBold.ttf'),
        'work-sans-thin': require('./assets/fonts/WorkSans-Thin.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
