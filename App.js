import Home from "./components/Home"
import About from "./components/About"
import Curriculum from "./components/Curriculum"
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { NativeModules } from "react-native"

const Drawer = createDrawerNavigator()
const { StatusBarManager } = NativeModules

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            width: 250,
            paddingTop: 20
          },
          headerStyle: {
            height: 100,
          }
        }}
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Curriculum" component={Curriculum} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
