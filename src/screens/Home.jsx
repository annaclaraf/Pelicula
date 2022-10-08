import { View, StyleSheet, Text, ScrollView, ImageBackground } from 'react-native'

import { Footer } from '../components/Footer'
import { GenresSlider } from '../components/GenresSlider'
import { UpcomingMovies } from '../components/UpcomingMovies'
import { PopularMovies } from '../components/PopularMovies'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>Película</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.banner}>
            <ImageBackground style={styles.bannerImg} source={{uri: 'https://cdn.discordapp.com/attachments/901295847793360909/1022701366042447912/1663901335183.jpg'}}>
            </ImageBackground> 
          </View>
          <GenresSlider />
          <UpcomingMovies />
          <PopularMovies />
        </View>
      </ScrollView>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: '#0A1823',
    height: 85, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    fontSize: 20
  },
  content: {
    flex: 1
  },
  banner: {
    margin: 20, borderRadius: 10, overflow: 'hidden'
  },
  bannerImg: {
    width: '100%', height: 220, resizeMode: 'cover'
  }
});