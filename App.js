// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import BusinessSearch from "./src/screens/BusinessSearch";



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="BusinessSearch"
      screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="BusinessSearch" component={BusinessSearch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
