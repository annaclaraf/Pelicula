import React from 'react';
import { Pressable, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

export function ListFooter({ data, title }) {
  const navigation = useNavigation();
  const movies = data
  return (
    <Pressable onPress={() => navigation.push('listMovies', { movies, title })} style={styles.content}>
      <Text style={styles.text}>Ver Mais</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  text: {
    marginRight: 10,
    padding: 10
  }
});