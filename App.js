// In App.js in a new project

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// screens
import BusinessSearch from "./src/screens/BusinessSearch";
import RestaurantDetail from  "./src/screens/RestaurantDetail";



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="BusinessSearch"
      screenOptions={{ gestureEnabled: false }}
      >
        <Stack.Screen name="BusinessSearch" component={BusinessSearch} />
        <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
