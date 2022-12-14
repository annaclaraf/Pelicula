import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import { AuthProvider } from './src/hooks/useAuth' 
import { Routes } from './src/routes' 

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" translucent={false} />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D5E1F1'
  }
});
