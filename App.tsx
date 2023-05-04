/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './components/Pages/HomeScreen';
import MainScreen from './components/Pages/ExploreScreen';
import ProfileScreen from './components/Pages/ProfileScreen';
import ExploreScreen from './components/Pages/ExploreScreen';

function StackNavigators() {
  const Stack = createNativeStackNavigator();
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Main" component={MainScreen} />
  </Stack.Navigator>;
}

function Drawer() {
  const Drawer = createDrawerNavigator();
}

function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
