import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png',
        }}
      />
      <Text>ProfileScreen</Text>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
});
