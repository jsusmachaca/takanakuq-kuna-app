import { Home } from './src/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='Home'
          component={Home}
          options={{title: 'Bienvenido'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) 
    
}