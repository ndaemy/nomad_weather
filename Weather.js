import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

const weatherCases = {
  Rain: {
    colors: ['#00C6FB', '#005BEA'],
    title: 'Raining now shit',
    subtitle: 'For more info look outside',
    icon: 'ios-rainy'
  },
  Clear: {
    colors: ['#FEF253', '#FF7300'],
    title: 'Sunny like hell',
    subtitle: '대프리카!',
    icon: 'ios-sunny'
  },
  Thunderstorm: {
    colors: ['#00ECBC', '#007ADF'],
    title: 'Thunderstorm in the house',
    subtitle: 'Actually, outside of the house',
    icon: 'ios-thundeerstorm'
  },
  Clouds: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Clouds',
    subtitle: 'I know, funking boring',
    icon: 'ios-cloudy'
  },
  Snow: {
    colors: ['#7DE2FC', '#B9B6E5'],
    title: 'Cold as balls',
    subtitle: 'Do you wanna build a snowman?',
    icon: 'ios-snow'
  },
  Drizzle: {
    colors: ['#89F7FE', '#66A6FF'],
    title: 'Drizzle',
    subtitle: 'Is like rain, but shit',
    icon: 'ios-rainy-outline'
  },
  Haze: {
    colors: ['#D7D2CC', '#304352'],
    title: 'Haze',
    subtitle: 'I barely drive shit',
    icon: 'ios-partly-sunny'
  }
};

function Weather({ weatherName, temp, cityName }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <Ionicons color="white" size={144} name={weatherCases[weatherName].icon} />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.cityName}>{cityName}</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  weatherName: PropTypes.string.isRequired,
  temp: PropTypes.number.isRequired,
  cityName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  temp: {
    fontSize: 48,
    color: 'white',
    marginTop: 10
  },
  cityName: {
    fontSize: 24,
    color: 'white',
    marginTop: 20
  },
  lower: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-end',
    paddingLeft: 25,
    marginBottom: 48
  },
  title: {
    fontSize: 36,
    color: 'white',
    marginBottom: 10,
    fontWeight: '300'
  },
  subtitle: {
    fontSize: 24,
    color: 'white'
  }
});
