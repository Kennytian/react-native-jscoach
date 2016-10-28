import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
} from 'react-native';
import News from './api/news';
import XhrRequest from './utils/xhrRequest';

const styles = {
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
};

export default class JsCoachApp extends Component {
  componentDidMount() {
    News.findAll().then((data) => {
      console.debug('print-newsAll', data);
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.js
        </Text>
        <Text style={styles.instructions}>
          shake for dev menu
        </Text>
      </View>
    );
  }
}

XhrRequest.run();

AppRegistry.registerComponent('JsCoachApp', () => JsCoachApp);
