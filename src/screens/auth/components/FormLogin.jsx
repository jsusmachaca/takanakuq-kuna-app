import { TextInput, View, TouchableOpacity, Text, TouchableWithoutFeedback } from 'react-native' 
import { useState } from 'react'
import { styles } from '../styles/formStyles'
import { apiClient } from '../../../api/client'
import { realm } from '../../../db/realm'

export const FormLogin = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const loginHandler = () => {
    apiClient.post('/api/user/login', {
      username: username,
      password: password
    })
      .then (res => {
        console.log(res.data.access_token)
        realm.write(() => {
          realm.create('User', {
            id: Date.now(),
            username: username,
            jwt: res.data.access_token,
            medicines: []
          }, 'modified')
        })
      })
      .catch (err => {
        console.log(err)
      })
  }

  return (
    <View style={styles.formContainer}>
      <View style={styles.formulario}>
        <TextInput 
          placeholder='Ingrese su nombre usuario'
          style={styles.loginInput}
          returnKeyType='next'
          value={username}
          onChangeText={data => setUsername(data)}
        />
        <TextInput 
          placeholder='Ingrese su contraseña'
          style={styles.loginInput}
          value={password}
          onChangeText={data => setPassword(data)}
        />

        <TouchableOpacity style={styles.loginButton}
          onPress={() => loginHandler()}
        >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>    
        <View
          style={styles.signUpContainer}
        >
          <Text
            style={styles.textSignUp}
          >
            ¿Todavia no tienes una cuenta?
          </Text>
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('Register')}
          >
            <Text
              style={styles.textSignUpPress}
            >
              Registrate
            </Text>
          </TouchableWithoutFeedback>
          </View>            
      </View>
    </View>
  )
}
