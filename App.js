/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator, } from 'react-navigation';
import SearchPage from './SearchPage';
import SearchResults from './SearchResults';
import ShowDetail from './ShowDetail';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// type Props = {};
// class SearchPage extends Component<Props> {
//   static navigationOptions = {
//     title: 'Property Finder',
//   }; 
//   render() {
//     return React.createElement(Text, {style: styles.description}, "Search something to By!!!");
//   }
// }

const App = createStackNavigator({
  Home: { screen: SearchPage },
  Results: { screen: SearchResults },
  ShowDetail: { screen: ShowDetail},
});
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: 'red',
    marginTop: 100,
  },
});
