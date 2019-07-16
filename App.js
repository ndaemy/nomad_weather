import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import Weather from './Weather';

export default class App extends Component {
  state = {
    isLoaded: true
  };
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <ActivityIndicator />
            <Text style={styles.loadingText}>Getting the weather</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  loading: {
    flex: 1,
    backgroundColor: '#FDF6AA',
    justifyContent: 'flex-end'
  },
  loadingText: {
    fontSize: 36,
    paddingLeft: 25,
    marginBottom: 100
  }
});
