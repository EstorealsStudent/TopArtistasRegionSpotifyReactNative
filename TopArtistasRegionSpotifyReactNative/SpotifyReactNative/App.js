import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Import the components
import ListArtist from './Screens/ListArtist';
import ShowArtist from './Screens/ShowArtist';
import CreateArtist from './Screens/CreateArtist'; // Note the lowercase 'CreateArtist'

export default function App() {
  const Stack = createStackNavigator();

  function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='List' component={ListArtist} />
        <Stack.Screen name='Create' component={CreateArtist} />
        <Stack.Screen name='Show' component={ShowArtist} />
      </Stack.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <MyStack />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
