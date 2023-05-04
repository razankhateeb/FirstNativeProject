import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SettingsGroup from '../UI/Settings/SettingsGroup';
import {Accountsettings, settings} from '../../data/settings';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileDetails}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png',
          }}
        />
        <Text style={styles.name}>Profile Screen</Text>
      </View>
      <ScrollView>
        <SettingsGroup title={'Profile'} settings={settings}></SettingsGroup>

        <SettingsGroup
          title={'Account Settings'}
          settings={Accountsettings}></SettingsGroup>
      </ScrollView>
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
});
