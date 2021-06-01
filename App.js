import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer ,createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
export default class App extends React.Component{
  render(){
    return(
      <View>
         <Text style = {{fontSize: 40, textDecorationLine:'underline', fontStyle:'italic', color:'orange', alignItems: 'center', justifyContent:'center', paddingLeft:10, marginTop: 50, textAlign: 'center'}}>Shadow</Text>
         
        <AppContainer/>
      </View>
    )
  }
}

const switchNavigator = createSwitchNavigator({
  LoginScreen: {screen:LoginScreen},
  SignUpScreen:{screen: SignUpScreen}
})
const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
