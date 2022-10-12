import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Loading } from './Loading'

export function MovieSlider({ data, style }) {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setMovies(data)
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [data]);


  const renderItem = ({ item }) => {
    const movieId = item.id
    return (
      <Pressable style={styles.content} onPress={() => navigation.push('details', {movieId})}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.image} />
      </Pressable>
    );
  };

  return (
    loading ? <Loading/> : 
      <View>
        <FlatList
          data={movies}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          horizontal
          style={style}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 200,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 5,
    overflow: "hidden"
  },
  image: {
    width: 140, 
    height: "100%", 
    resizeMode: 'cover'
  }
});