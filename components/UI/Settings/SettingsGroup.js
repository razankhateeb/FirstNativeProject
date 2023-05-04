import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';

const SettingsGroup = ({title, settings}) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      {settings.map(setting => (
        <Pressable
          style={({pressed}) => [
            styles.settingsBox,
            pressed && styles.pressEffect,
          ]}
          onPress={setting.function}>
          <View style={styles.iconContainer}>
            {/* <Icon name={setting.icon} ize={24} color="black"></Icon> */}
          </View>
          <Text style={styles.settingName}>{setting.name}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default SettingsGroup;

const styles = StyleSheet.create({
  settingsBox: {
    backgroundColor: '#fff',
    width: 350,
    padding: 20,
    borderRadius: 10,
    marginBottom: 5,
  },
  pressedButton: {
    backgroundColor: '#375faa',
    opacity: 0.1,
  },
});
