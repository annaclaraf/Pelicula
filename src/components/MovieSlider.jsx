import React, { useState, useEffect } from 'react';
import { View, Image, FlatList, StyleSheet, Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { Loading } from './Loading'
import { ListFooter } from '../components/ListFooter'

export function MovieSlider({ data, style, viewMoreMovies, title }) {
  const navigation = useNavigation();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const moviesData = viewMoreMovies ? data.slice(0,8) : data

  async function loadMovies(pagination = page) {
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
    loading ? <Loading/> : 
      <View>
        <FlatList
          data={movies}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          ListFooterComponent={viewMoreMovies && movies.length == 8 && <ListFooter data={data} title={title} />}
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