import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import HomeScene from 'IMC/src/scenes/home/index';
import ProfileScene from 'IMC/src/scenes/profiles/index';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component={HomeScene} options={{title:'IMC'}}/>
        <Stack.Screen name= "Profile" component={ProfileScene} options={{title:'Result'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
