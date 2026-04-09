import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Calculator from './screens/Calculator'
import About from './screens/About'

const Stack = createNativeStackNavigator()

const RouteStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  )
}

export default RouteStack