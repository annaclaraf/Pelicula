import React from 'react';
import { View, Text, Image, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { GoogleLogo } from 'phosphor-react-native'

import { useAuth } from '../hooks/useAuth'

export function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleLogin() {
    try {
      return await signInWithGoogle();
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível conectar a conta Google');
    }
  }

  return (
    <View style={styles.wrapper}>
      <Image style={styles.logo} source={{ uri: 'https://cdn.discordapp.com/attachments/901295847793360909/1031866236126105671/logo2.png' }} />
      <View style={styles.container}>
        <Text style={styles.text}>Faça login com sua conta do Google</Text>
        <TouchableOpacity style={styles.btnGoogle} onPress={handleLogin}>
          <GoogleLogo weight='bold' color='#FFF' size={26} />
          <Text style={styles.btnText}>
            Entrar com Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    alignItems: "center",
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    width: '85%',
    justifyContent: 'center',
  },
  logo: {
    width: 350,
    height: 60,
    position: 'absolute',
    top: 100
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 15
  },
  btnGoogle: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DB4A39',
    borderRadius: 5
  },
  btnText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10
  }
})