import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  function navigateToPageHandler() {
    navigation.navigate('Main');
  }
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      {/* <Button title="Press" onPress={navigateToPageHandler} /> */}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
