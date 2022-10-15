import React from 'react';
import { useNavigation } from '@react-navigation/native'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { House, MagnifyingGlass, User } from 'phosphor-react-native'

export function Footer({selected}) {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('home')}>
        <House 
          color="#FFFFFF" 
          size={26} 
          weight={selected == 'home' ? 'fill' : 'light' }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('search')}>
        <MagnifyingGlass 
          color="#FFFFFF" 
          size={26} 
          weight={selected == 'search' ? 'fill' : 'light' }
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.push('profile')}>
        <User 
          color="#FFFFFF" 
          size={26} 
          weight={selected == 'profile' ? 'fill' : 'light' }
        />
      </TouchableOpacity>
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