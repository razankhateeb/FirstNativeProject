import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';

const SettingItem = ({icon, name}) => {
  return (
    <Pressable style={styles.settingsBox}>
      <Text>{name}</Text>
    </Pressable>
  );
};

export default SettingItem;

const styles = StyleSheet.create({});
