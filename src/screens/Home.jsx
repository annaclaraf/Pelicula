import { View, StyleSheet, Text, ScrollView } from 'react-native'

import { Footer } from '../components/Footer'

export function Home() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
            <Text style={styles.logo}>Película</Text>
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
    flex: 1,
    backgroundColor: '#0A1823',
    height: 85, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    color: 'white',
    fontSize: 20
  }
});