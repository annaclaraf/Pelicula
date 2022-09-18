import React from 'react';
import { View, Image, FlatList, Text, StyleSheet, Pressable, Alert } from 'react-native'

export function MovieList({ data }) {
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.card} onPress={() => { Alert.alert('Movie', item.title) }}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text>{new Date(item.release_date).getFullYear()}</Text>
          <Text numberOfLines={3} ellipsizeMode="tail" style={styles.overview}>{item.overview}</Text>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  card: {
    flex: 1, 
    flexDirection: 'row', 
    height: 195, 
    marginHorizontal: 20, 
    marginBottom: 20, 
    borderWidth: 1, 
    borderRadius: 10, 
    backgroundColor: '#FFF', 
    elevation: 10, 
    overflow: "hidden"
  },
  image: {
    width: 130, 
    height: "100%", 
    resizeMode: 'cover'
  },
  info: {
    flex: 1, 
    padding: 20, 
    flexDirection: 'column'
  },
  title: {
    fontWeight: 'bold'
  },
  overview: { 
    marginTop: 20, 
    lineHeight:20 
  }
});