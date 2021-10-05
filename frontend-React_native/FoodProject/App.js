import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HomepageItem from './components/homepageItem';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HomepageItem/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
