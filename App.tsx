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
import WelcomeScreen from './components/WelcomeScreen';
import MainScreen from './components/MainScreen';
import ProfileScreen from './components/ProfileScreen';

function StackNavigators() {
  const Stack = createNativeStackNavigator();
  <Stack.Navigator>
    <Stack.Screen name="Home" component={WelcomeScreen} />
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
        <Tab.Screen name="Home" component={WelcomeScreen} />
        <Tab.Screen name="Explore" component={MainScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
