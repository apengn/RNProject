/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
"use strict"
import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';
import NavigatorComponent from './app/component/NavigatorComponent'
 class RNProject extends Component {
  render() {
    return (<NavigatorComponent/>);
  }
}
AppRegistry.registerComponent('RNProject', () => RNProject);
