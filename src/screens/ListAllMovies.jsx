import React from 'react';
import { View, Image, FlatList, Text, StyleSheet, Pressable } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { CaretLeft } from 'phosphor-react-native';

export function ListAllMovies() {
  const navigation = useNavigation();
  const route = useRoute()
  const { movies, title } = route.params

  const renderItem = ({ item }) => {
    const movieId = item.id
    return (
      <Pressable style={styles.content} onPress={() => navigation.push('details', { movieId })}>
        <Image source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} style={styles.image} />
      </Pressable>
    );
  };

  return (
    <>
      <LinearGradient colors={['#FFFFFF99', '#FFFFFF00']} style={styles.header}>
        <Pressable onPress={() => navigation.goBack()} style={styles.icon}><CaretLeft size={30} /></Pressable>
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>

      <View style={styles.container}>
        <FlatList
          data={movies}
          renderItem={renderItem}
          numColumns={3}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex: 1
  },
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
  icon: {
    position: 'absolute',
    left: 20
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#0A1823'
  },
  content: {
    flex: 1 / 3,
    height: 190,
    margin: 1,
    width: 140,
    borderRadius: 10,
    overflow: "hidden"
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: 'cover',
  }
});