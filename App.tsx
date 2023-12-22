import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import React, { useEffect } from 'react';
export default function App() {

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  
    return enabled; // Return the result
  };
  
  useEffect(() => {
    const checkPermission = async () => {
      const permission = await requestUserPermission();
      if (permission) {
        messaging()
          .getToken()
          .then(token => console.log(token));
      }
    };
    checkPermission();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
