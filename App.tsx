/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SingInScreen from './src/screens/SignInScreen/SingInScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigation from './src/navigation';



const App = () => {
  return (
    <SafeAreaView style={style.root}>
      <Navigation>

      </Navigation>
    </SafeAreaView>

  );
}


const style = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#d3d3d3'
  }
})

export default App;
