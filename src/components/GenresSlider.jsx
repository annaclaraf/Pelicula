import { useEffect, useState } from 'react'
import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';

import { MovieSlider } from './MovieSlider'

export function GenresSlider() {
  const [genres, setGenres] = useState([])
  const [data, setData] = useState([])
  const [selectedGenre, setSelectedGenre] = useState('28')

  const renderItem = ({ item }) => {
    const selected = selectedGenre == item.id
    return (
      <Pressable 
        style={[styles.content, selected && styles.contentSelected]}
        onPress={() => {setSelectedGenre(item.id)}}
      >
        <Text style={[styles.text, selected && styles.textSelected]}>{item.name}</Text>
      </Pressable>
    )
  };

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR', { method: 'GET' })
      .then((res) => res.json())
      .then((res) => res.genres)
      .then((res) => res && (res.splice(0, 9))) 

      setGenres(response)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR&include_adult=false&page=1&with_genres=${selectedGenre}`, { method: 'GET' })
      .then((res) => res.json())
      .then((res) => res.results)
      .then((res) => res && (res.sort((a, b) => b.vote_count - a.vote_count)))
      .then((res) => res && (res.filter(movie => movie.overview && movie.poster_path)));

      setData(response)
    })()
  },[selectedGenre])

  return (
    <View>
      <Text style={styles.title}>Gêneros</Text>
      <FlatList 
        data={genres} 
        renderItem={renderItem} 
        showsHorizontalScrollIndicator={false}
        horizontal 
        style={styles.list} />
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
  },
  content: {
    padding: 10, 
    marginVertical: 10,
    marginRight: 5, 
    borderWidth: 1, 
    borderRadius: 30, 
    borderColor: '#0A1823',
    backgroundColor: 'transparent',
  },
  contentSelected: {
    backgroundColor: '#E82251',
    borderColor: '#E82251',
  },
  text: {
    fontSize: 16,
    color: '#0A1823',
    paddingHorizontal: 2
  },
  textSelected: {
    color: '#D5E1F1'
  },
  list: {
    paddingHorizontal: 10
  }
});