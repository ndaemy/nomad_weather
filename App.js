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
    isLoaded: false,
    error: null
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          isLoaded: true
        });
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }
  render() {
    const { isLoaded, error } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            {error ? <Text style={styles.errorText}>{error}</Text> : null}
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
  errorText: {
    color: 'red',
    fontSize: 18,
    alignSelf: 'center',
    marginBottom: 24
  },
  loadingText: {
    fontSize: 36,
    paddingLeft: 25,
    marginBottom: 100
  }
});
