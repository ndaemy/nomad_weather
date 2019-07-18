import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import Weather from './Weather';

const API_KEY = '3d7b4c8130b48498701444329703eb72';

export default class App extends Component {
  state = {
    isLoaded: false,
    error: null,
    temperature: null,
    weatherName: null,
    cityName: null
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this._getWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: error
        });
      }
    );
  }

  _getWeather = (lat, long) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&APPID=${API_KEY}`
    )
      .then(response => response.json())
      .then(json => {
        console.log(json);
        this.setState({
          temperature: json.main.temp,
          weatherName: json.weather[0].main,
          cityName: json.name,
          isLoaded: true
        });
      });
  };

  render() {
    const { isLoaded, error, temperature, weatherName, cityName } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather weatherName={weatherName} temp={Math.floor(temperature - 273.15)} cityName={cityName} />
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
