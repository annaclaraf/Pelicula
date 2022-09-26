import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { MovieSlider } from './MovieSlider'

export function PopularMovies() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR&sort_by=popularity.desc&page=1`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => res.results)
      .then((res) => res && (res.sort((a, b) => b.vote_average - a.vote_average)))
      .then((res) => res && (res.filter(movie => movie.overview && movie.poster_path)));

      setData(response)
    })()
  },[])

  return (
    <View>
      <Text style={styles.title}>Populares</Text>
      <MovieSlider data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#0A1823',
    paddingTop: 10,
    paddingLeft: 10
  }
});