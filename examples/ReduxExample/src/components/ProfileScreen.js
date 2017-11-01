import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DemoGallery from "./DemoGallery";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

const ProfileScreen = () => (
  <View style={styles.container}>
    <DemoGallery/>
  </View>
);

ProfileScreen.navigationOptions = {
  title: 'Profile',
};

export default ProfileScreen;
