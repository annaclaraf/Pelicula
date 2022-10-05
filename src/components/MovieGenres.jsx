import { View, Text, StyleSheet } from 'react-native';

export function MovieGenres({ genres }) {
  const renderItem = ( item, index, genresArr ) => {
    return (
      <Text key={index} style={styles.text}>
        {item.name}
        {index + 1 != genresArr.length && ' \u2022 '}
      </Text>
    )
  };

  return (
    <View style={styles.content}>
      {genres && genres.map((item, index, genresArr) => {
        return renderItem(item, index, genresArr)
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    flex:1, 
    flexDirection:'row', 
    flexWrap: 'wrap'
  },
  text: {
    fontSize: 17
  }
})