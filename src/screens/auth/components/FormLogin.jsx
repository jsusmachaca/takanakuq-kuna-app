import { TextInput, View, TouchableOpacity, Text, TouchableWithoutFeedback, Alert } from 'react-native' 
import { styles } from '../styles/formStyles'

export const FormLogin = (props) => {
  return (
    <View style={styles.formContainer}>
      <View style={styles.formulario}>
        <TextInput 
          placeholder='Ingrese su nombre usuario'
          style={styles.loginInput}
          returnKeyType='next'
        />
        <TextInput 
          placeholder='Ingrese su contraseña'
          style={styles.loginInput}
        />

        <TouchableOpacity style={styles.loginButton}>
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
