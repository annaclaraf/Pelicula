import { createContext, useContext, useEffect, useState } from "react";
import * as AuthSession from 'expo-auth-session';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const [userStorageLoading, setUserStorageLoading] = useState(false)
  const userStorageKey = '@pelicula:user';

  async function signInWithGoogle(){
    try {
      const RESPONSE_TYPE = 'token';
      const SCOPE = encodeURI('profile email');

      const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl })

      if (type === 'success') {
        const response = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${params.access_token}`)
        const userInfo = await response.json();
        const userLogged = {
          id: String(userInfo.id),
          name: userInfo.name,
          given_name: userInfo.given_name,
          email: userInfo.email,
          photo: userInfo.picture
        }
        setUser(userLogged)
        await AsyncStorage.setItem(userStorageKey, JSON.stringify(userLogged));
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function signOut(){
    await AsyncStorage.removeItem(userStorageKey);
    setUser({});
  }

  async function loadUserStorage(){
    setUserStorageLoading(true);
    const userStorage = await AsyncStorage.getItem(userStorageKey)
    if (userStorage) {
      const userLogged = JSON.parse(userStorage)
      setUser(userLogged)
    } else {
      setUserStorageLoading(false)
    }
  }

  useEffect(() => {
    loadUserStorage();
  }, [])

  return (
    <AuthContext.Provider value={{ user, userStorageLoading, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { useAuth, AuthProvider }