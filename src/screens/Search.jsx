import { useState, useEffect } from 'react'
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native'
import { MagnifyingGlass, X } from 'phosphor-react-native'

import { Footer } from '../components/Footer'
import { MovieList } from '../components/MovieList'

export function Search() {
  const [movie, setMovie] = useState('')
  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR&query=${movie}&page=1&include_adult=false`, { method: "GET" })
        .then((res) => res.json())
        .then((res) => res.results)
        .then((res) => res && (res.sort((a, b) => b.popularity - a.popularity)))
        .then((res) => res && (res.filter(movie => movie.overview && movie.poster_path)));
      
      setData(response)
    })();
  }, [movie]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.inputContainer}>
          <MagnifyingGlass color="gray" size={20} />
          <TextInput style={styles.input} placeholder="Buscar..." value={movie} onChangeText={setMovie} />
          {movie && <Pressable onPress={() => {setMovie('')}}><X color="gray" size={20} /></Pressable>}
        </View>
      </View>
      <View style={styles.content}>
        <MovieList data={data} />
      </View>
      <Footer selected={'search'} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    width: '100%',
    maxHeight: 85,
    borderBottom: 1, 
    marginBottom: 20, 
    backgroundColor: '#0A1823'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10, 
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#FFF'
  },
  input: {
    flex: 1,
    padding: 10,
    color: 'gray'
  },
  content: {
    flex: 1
  }
});