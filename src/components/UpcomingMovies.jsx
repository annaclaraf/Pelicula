import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { MovieSlider } from './MovieSlider'

export function UpcomingMovies() {
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR&page=1`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => res.results)
      .then((res) => res && (res.sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())))
      .then((res) => res && (res.filter(movie => movie.overview && movie.poster_path)));

      setData(response)
    })()
  },[])

  return (
    <View>
      <Text style={styles.title}>Lançamentos</Text>
      <MovieSlider data={data} style={{paddingHorizontal: 10}} />
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