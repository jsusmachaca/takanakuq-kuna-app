import { Home } from './src/screens/home/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

//Adding new components
import Configuration from './src/screens/home/components/Configuration';
import { Login } from './src/screens/home/components/Login';


const Stack = createNativeStackNavigator()

const MyStack = () => {
  return(
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen
        name='Login'
        component={Login}
        options={{headerShown: false, title: 'ESTE ES EL LOGIN'}}
      />
      <Stack.Screen
        name='MyTab'
        component={MyTab}
        options={{headerShown: false}}
      />
      <Stack.Screen 
        name='Home'
        component={Home}
        options={{title: 'Bienvenido'}}
        />
    </Stack.Navigator>
  )
} 

const Tab = createBottomTabNavigator()

const MyTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Inicio', 
          headerShown: false,
          tabBarIcon: ({ color, size })=>(
            <MaterialCommunityIcons name="home" color={color} size={size}/>
          ),

        }}
      />
      <Tab.Screen
        name='buttonPlus'
        component={Configuration}
        options={{title: 'ButtonPlus'}}
      />
      <Tab.Screen
        name='Configuration'
        component={Configuration}
        options={{title: 'Configuracion'}}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  ) 
    
}