import React from 'react';
import { View, Alert, Pressable, StyleSheet } from 'react-native';
import { House, MagnifyingGlass, User } from 'phosphor-react-native'

export function Footer() {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => { Alert.alert('Test', 'Home') }}>
        <House color="#FFFFFF" size={26} />
      </Pressable>
      <Pressable onPress={() => { Alert.alert('Test', 'Search') }}>
        <MagnifyingGlass color="#FFFFFF" size={26} />
      </Pressable>
      <Pressable onPress={() => { Alert.alert('Test', 'Profile') }}>
        <User color="#FFFFFF" size={26} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0A1823', 
    height: 60, 
    justifyContent: 'space-around',
    alignItems: 'center', 
    flexDirection: 'row'
  }
});