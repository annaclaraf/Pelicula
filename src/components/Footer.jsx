import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, Alert, Pressable, StyleSheet } from 'react-native';
import { House, MagnifyingGlass, User } from 'phosphor-react-native'

export function Footer() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('home')}>
        <House color="#FFFFFF" size={26} />
      </Pressable>
      <Pressable onPress={() => navigation.navigate('search')}>
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