import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Search } from '../screens/Search'
import { Home } from '../screens/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="search" component={Search} />
    </Navigator>
  )
}