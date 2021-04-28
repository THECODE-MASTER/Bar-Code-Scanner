import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ScanScreen from './screens/scanscreen';

export default class App extends React.Component {
  render(){
    return (
      
        <ScanScreen />
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
