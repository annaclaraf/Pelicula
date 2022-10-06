import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { MovieSlider } from './MovieSlider'

export function RelatedMovies({ movieId }) {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      let response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR`, { method: "GET" })
        .then((res) => res.json())
        .then((res) => res.results)
        .then((res) => res && (res.filter(movie => movie.overview && movie.poster_path)));

      if (response.length == 0) {
        response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR`, { method: "GET" })
          .then((res) => res.json())
          .then((res) => res.results)
          .then((res) => res && (res.filter(movie => movie.overview && movie.poster_path)));
      }

      setData(response)
    })();
  }, [])

  return (
    <View>
      <Text style={styles.title}>Filmes Similares</Text>
      <MovieSlider data={data} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#0A1823',
    paddingVertical: 10
  }
});