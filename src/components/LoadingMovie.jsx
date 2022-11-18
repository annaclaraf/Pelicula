import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native'
import { FilmSlate } from 'phosphor-react-native'

export function LoadingMovie() {
  const [data, setData] = useState(['1', '2', '3', '4']);

  const renderItem = () => {
    return (
      <View style={styles.content}>
        <FilmSlate size={60} color='#bbb' />
       </View>
    );
  };

  return (
    <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          style={styles.list}
          horizontal
        />
      </View>
  );
}

const styles = StyleSheet.create({
  content: {
    height: 200,
    width: 140,
    borderRadius: 10,
    marginRight: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bbb'
  },
  list: {
    paddingHorizontal: 10
  }
});