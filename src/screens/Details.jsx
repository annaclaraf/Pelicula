import { useEffect, useState } from 'react'
import { View, Text, Pressable, Image, ImageBackground, ScrollView, Button, StyleSheet } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native'
import { LinearGradient } from 'expo-linear-gradient';
import { CaretLeft } from 'phosphor-react-native';

import { useAuth } from '../hooks/useAuth'

import { moviesToWatchApi, moviesWatchedApi } from '../services/api'

import { RelatedMovies } from '../components/RelatedMovies'
import { MovieGenres } from '../components/MovieGenres'
import { dateFormat } from '../utils/dateFormat'

export function Details() {
  const { user } = useAuth();

  const navigation = useNavigation();
  const route = useRoute()

  const [movie, setMovie] = useState({})

  const { movieId } = route.params

  const userId =  user.id

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=17830acb428fca194205745d95c40ae4&language=pt-BR`, { method: "GET" })
        .then((res) => res.json())

      setMovie(response)
    })();
  }, [])

  async function handleAddMovieToWatch() {
    await moviesToWatchApi.post('/movies/watch', { movieId, userId })
  }

  async function handleAddMovieWatched() {
    await moviesWatchedApi.post('/movies/watched', { movieId, userId })
  }

  return (
    <View>
      <LinearGradient colors={['#FFFFFF99', '#FFFFFF00']} style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}><CaretLeft size={30} /></Pressable>
      </LinearGradient>
      <ScrollView >
        <View>
          <View>
            <ImageBackground style={styles.bannerImg} source={{ uri: `https://image.tmdb.org/t/p/original${movie.backdrop_path}` }}>
            </ImageBackground>
          </View>
          <View style={styles.content}>
            <View style={styles.posterContainer}>
              <Image style={styles.posterImg} source={{ uri: `https://image.tmdb.org/t/p/original${movie.poster_path}` }} />
              <View style={styles.info}>
                <Text style={styles.title}>{movie.title}</Text>
                <Text style={styles.date}>{dateFormat(movie.release_date)}</Text>
                <MovieGenres genres={movie.genres} />
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <Button title="Quero Assistir" color="#D5E1F1" onPress={handleAddMovieToWatch} />
              </View>
              <View style={styles.button}>
                <Button title="Assistido" color="#D5E1F1" onPress={handleAddMovieWatched} />
              </View>
            </View>
            {movie.overview && (
              <>
                <Text style={styles.overviewTitle}>Sinopse</Text>
                <Text style={styles.overview}>{movie.overview}</Text>
              </>
            )}
            <RelatedMovies movieId={movieId} />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0
  },
  bannerImg: {
    width: '100%', 
    height: 300, 
    resizeMode: 'cover'
  },
  content: {
    marginTop: -50, 
    backgroundColor: '#F2F2F2',
    borderTopLeftRadius: 50, 
    borderTopRightRadius: 50, 
    padding: 30
  },
  posterContainer: {
    overflow: "hidden", 
    height: 180, 
    marginTop: 10, 
    flex: 1,
    flexDirection: 'row'
  },
  posterImg: {
     width: 120,
     height: "100%",
     resizeMode: 'cover', 
     borderRadius: 20
  },
  info: {
    flex: 1,
    paddingHorizontal: 20,
    flexDirection: 'column'
  },
  title: {
    fontSize: 20, 
    fontWeight: '700',
    color: '#0A1823'
  },
  date: {
    marginVertical: 5, 
    fontSize: 17
  }, 
  buttonsContainer: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 20 
  },
  button: {
    width: '48%'
  },
  overviewTitle: { 
    fontSize: 20, 
    color: '#0A1823',
    fontWeight: '700',
    marginBottom:  10
  },
  overview: {
    fontSize: 17
  }
});