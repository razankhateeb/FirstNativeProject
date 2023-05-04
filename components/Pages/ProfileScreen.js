import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileDetails}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png',
          }}
        />
        <Text style={styles.name}>Profile Screen</Text>
      </View>

      <View>
        <Text>Profile Settings</Text>

        <View style={styles.settingsBox}>
          <Text>Account information</Text>
        </View>
        <View style={styles.settingsBox}>
          <Text>Account information</Text>
        </View>
        <View style={styles.settingsBox}>
          <Text>Account information</Text>
        </View>
      </View>
    </View>
  );
};
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16,
  },
  profileDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 16,
  },
  settingsBox: {
    backgroundColor: '#fff',
    width: 350,
    padding: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
});
