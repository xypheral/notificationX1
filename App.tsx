import '@react-native-firebase/messaging'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import {getFcmToken, registerListenerWithFCM} from './src/utils/fcmHelper';
import Clipboard from '@react-native-community/clipboard';

export default function App() {
  const [token, setToken] = useState<string | null>(null);

  const copyToClipboard = () => {
    if (token) {
      Clipboard.setString(token);
    }
  };

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
      <Button title="Copy Token" onPress={copyToClipboard} />
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
