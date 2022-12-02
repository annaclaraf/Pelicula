import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function ViewMore({title}) {
  const navigation = useNavigation();


  return (
    <Pressable onPress={() => navigation.push('listMovies', { title })} >
      <Text style={styles.text}>Ver Mais</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#0A1823',
    paddingTop: 10, 
    paddingRight: 10
  }
});