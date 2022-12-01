import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { LoadingMovie } from './LoadingMovie'

export function MovieSlider({ data, style, viewMoreMovies }) {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const moviesData = viewMoreMovies ? data.slice(0,8) : data

  async function loadMovies(pagination = page) {
    if(pagination > moviesData.length ) return 

    const response = await moviesData.slice(pagination, pagination+4)
    setMovies(movies => [...movies, ...response]);

    setPage(pagination+4)

    setTimeout(() => {
      setLoading(false)
    }, 200);
  }

  useEffect(() => {
    setLoading(true)
    setMovies([])
    loadMovies(0)
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
    (loading || movies.length == 0 ) ? <LoadingMovie /> :
      <View>
        <FlatList
          data={movies}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          onEndReachedThreshold={0.1}
          onEndReached={() => loadMovies()}
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