import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const WelcomeScreen = ({navigation}) => {
  function navigateToPageHandler() {
    navigation.navigate('Main');
  }
  return (
    <View>
      <Text>WelcomeScreen</Text>
      <Button title="Press" onPress={navigateToPageHandler} />
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});