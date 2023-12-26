import '@react-native-firebase/messaging'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import {getFcmToken, registerListenerWithFCM} from './src/utils/fcmHelper';

export default function App() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    getFcmToken();
  }, []);

  useEffect(() => {
    const unsubscribe = registerListenerWithFCM();
    return unsubscribe;
  }, []);

  useEffect(() => {
    getFcmToken().then(setToken);
  }, []);
  
  return (
    <View style={styles.container}>
      <Text>Hellooooo</Text>
      <Text>FCM Token: {token}</Text>
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
