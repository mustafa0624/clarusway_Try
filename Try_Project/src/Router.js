// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {CityPages} from "./pages"



const Stack = createStackNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CityPages" component={CityPages} />
        <Stack.Screen name="RestaurantPages" component={RestaurantPages} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;