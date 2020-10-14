import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import FoodList from "./FoodList";

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar hidden/>
      <FoodList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
