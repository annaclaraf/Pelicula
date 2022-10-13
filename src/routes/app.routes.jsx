import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Search } from '../screens/Search'
import { Home } from '../screens/Home'
import { Details } from '../screens/Details'
import { Profile } from '../screens/Profile'
import { ListAllMovies } from '../screens/ListAllMovies'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="search" component={Search} />
      <Screen name="details" component={Details} />
      <Screen name="profile" component={Profile} />
      <Screen name="listMovies" component={ListAllMovies} />
    </Navigator>
  )
}