import { View, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native'

import { Footer } from '../components/Footer'
import { GenresSlider } from '../components/GenresSlider'
import { UpcomingMovies } from '../components/UpcomingMovies'
import { PopularMovies } from '../components/PopularMovies'

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.logo} source={{ uri: 'https://cdn.discordapp.com/attachments/901295847793360909/1030773806102482944/20221015_061053_0002-removebg-preview.png' }}  />
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
      <Footer selected={'home'} />
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
    width: 250, 
    height: 50
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