import { useState, useEffect } from 'react';
import { View, Image, Text, Pressable, ScrollView, Alert, StyleSheet } from 'react-native';
import { SignOut } from 'phosphor-react-native'

import { useAuth } from '../hooks/useAuth'

import { AllMoviesToWatch, AllMoviesWatched } from '../utils/getAllMovies'

import { Footer } from '../components/Footer'
import { MovieSlider } from '../components/MovieSlider'
import { EmptyList } from '../components/EmptyList'

export function Profile() {
  const { user, signOut } = useAuth();

  const [moviesWatched, setMoviesWatched] = useState([])
  const [moviesToWatch, setMoviesToWatch] = useState([])
  const [loading, setLoading] = useState(true)

  async function handleSignOut() {
    Alert.alert(
      "Sair", "Tem certeza que deseja sair da sua conta?",
      [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sair",
          onPress: () => signOut()
        }
      ],
      {
        cancelable: true
      }
    );
  }

  async function AllMovies() {
    const watched = await AllMoviesWatched(user);
    const towatch = await AllMoviesToWatch(user);

    setTimeout(() => {
      setMoviesWatched(watched)
      setMoviesToWatch(towatch)
      setLoading(false)
    }, 100);

  }

  useEffect(() => {
    setLoading(true)
    AllMovies()
  }, [])

  return (
    <>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.profileInfo}>
            <Pressable style={styles.signOutButton} onPress={handleSignOut}>
              <SignOut color="#000000" size={26} />
            </Pressable>
            <View style={styles.avatar}>
              <Image source={{ uri: user.photo }} style={styles.avatarImg} />
            </View>
            <Text style={styles.name}>{user.name}</Text>

            <View style={styles.moviesInfos}>
              <View style={styles.moviesInfosSection}>
                <Text style={styles.moviesInfosText}>Filmes</Text>
                <Text style={styles.moviesInfosText}>{moviesWatched.length + moviesToWatch.length}</Text>
              </View>
              <View style={styles.divisorLine} />
              <View style={styles.moviesInfosSection}>
                <Text style={styles.moviesInfosText}>Assistidos</Text>
                <Text style={styles.moviesInfosText}>{moviesWatched.length}</Text>
              </View>
              <View style={styles.divisorLine} />
              <View style={styles.moviesInfosSection}>
                <Text style={styles.moviesInfosText}>Para Assistir</Text>
                <Text style={styles.moviesInfosText}>{moviesToWatch.length}</Text>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.title}>Filmes Assistidos</Text>
            {!loading && moviesWatched.length == 0 ?
              <EmptyList /> :
              <MovieSlider data={moviesWatched} style={{ paddingHorizontal: 10 }} viewMoreMovies={true} title={'Filmes Assistidos'} />
            }
            <Text style={styles.title}>Filmes Para Assistir</Text>
            {!loading && moviesToWatch.length == 0 ? 
              <EmptyList /> : 
              <MovieSlider data={moviesToWatch} style={{ paddingHorizontal: 10 }} viewMoreMovies={true} title={'Filmes Para Assistir'} />
            }
          </View>
        </View>
      </ScrollView>
      <Footer selected={'profile'} />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#F2F2F2'
  },
  profileInfo: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: 280,
    backgroundColor: '#FFFFFF'
  },
  signOutButton: {
    position: 'absolute',
    top: 20,
    right: 20
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden'
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  name: {
    fontWeight: '700',
    fontSize: 20
  },
  moviesInfos: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '80%',
    marginVertical: 30
  },
  moviesInfosSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
  moviesInfosText: {
    fontSize: 15
  },
  divisorLine: {
    width: 2,
    height: 40,
    backgroundColor: 'gray'
  },
  title: {
    fontWeight: '700',
    fontSize: 20,
    color: '#0A1823',
    paddingTop: 10,
    paddingLeft: 10
  }
});