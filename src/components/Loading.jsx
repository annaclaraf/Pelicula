import { View, ActivityIndicator, StyleSheet} from 'react-native';

export function Loading() {
  return (
    <View style={styles.activity}>
      <ActivityIndicator size="small" color="#999" />
    </View>
  )
}

const styles = StyleSheet.create({
  activity: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  }
});