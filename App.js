import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { registerRootComponent } from 'expo';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome to Ray's App!</Text>
    </View>
    <View style={styles.firstButton}>
      <Button
        onPress={() => {
          alert('Your Pressed Meh');
        }}
        title="Start"
      />
    </View>    
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: 24,
  },
  firstButton: {
    flex: 1,
    margin: 20,
    alignItems: 'center',
    width: "100%"
  }
});
