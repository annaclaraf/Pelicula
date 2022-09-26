import React from 'react';
import { View, Image, FlatList, StyleSheet, Pressable, Alert } from 'react-native'

export function MovieSlider({ data }) {
  const renderItem = ({ item }) => {
    return (
      <Pressable style={styles.content} onPress={() => { Alert.alert('Movie', item.title) }}>
        <Image source={{uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}} style={styles.image} />
      </Pressable>
    );
  };

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 200,
    borderRadius: 10,
    margin: 5,
    overflow: "hidden"
  },
  image: {
    width: 140, 
    height: "100%", 
    resizeMode: 'cover'
  },
  list: {
    paddingHorizontal: 5
  }
});