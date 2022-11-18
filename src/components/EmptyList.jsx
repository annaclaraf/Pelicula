import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Plus } from 'phosphor-react-native'

export function EmptyList() {
  const navigation = useNavigation();

  return (
    <View style={styles.section}>
      <Pressable style={styles.content} onPress={() => navigation.push('home')}>
        <View style={styles.container}>
          <Plus size={40} color='#BBB' />
          <Text style={styles.text}>Adicionar Filme</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    paddingLeft: 10 
  },
  content: {
    height: 200,
    width: 140,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bbb',
  },
  container: { 
    alignItems: 'center', 
    justifyContent: 'center', 
    flex: 1 
  },
  text: { 
    color: '#bbb' 
  }
});