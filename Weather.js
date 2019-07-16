import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default class Weather extends Component {
  render() {
    return (
      <LinearGradient colors={['#00C6FB', '#005BEA']} style={styles.container}>
        <View style={styles.upper}>
          <Ionicons color='white' size={144} name='ios-rainy' />
          <Text style={styles.temp}>28°</Text>
        </View>
        <View style={styles.lower}>
          <Text style={styles.title}>Raining now</Text>
          <Text style={styles.subtitle}>For more info look outside.</Text>
        </View>
      </LinearGradient>
    );
  }
}

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