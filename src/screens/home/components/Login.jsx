import { Button, ImageBackground, StyleSheet, TextInput, View, TouchableOpacity, Text } from 'react-native';

import kactus from '../assets/avatars/kactus.avatar.png'

export const Login = (props) => {
    return( 
        <ImageBackground source={kactus} style={styles.container}>
            <View>
                <View style={styles.tituloContainer}>
                    <Text style={styles.titulo}>TAKANAKUQ</Text>
                    <Text style={styles.subtitulo}> Kuna</Text>
                </View>
                <View style={styles.formulario}>
                    <TextInput placeholder='Ingrese su nombre usuario' style={styles.loginInput}/>
                    <TextInput placeholder='Ingrese su contraseña' style={styles.loginInput}/>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.loginButton} onPress={() => props.navigation.navigate('MyTab')} title='Iniciar sesion'>
                        <Text style={styles.buttonText}>Iniciar sesión</Text>
                    </TouchableOpacity>    
                    <Text>Todavia no tienes una cuenta? Registrate</Text>            
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    tituloContainer:{
        marginTop: 55,
        marginBottom: 190,
    },
    titulo:{

        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 50
    },  
    subtitulo:{
        position: 'absolute',
        top: 38,
        left: 235,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
    },  
    loginInput:{
        marginBottom: 28,
        paddingHorizontal: 18,
        paddingVertical: 8,
        backgroundColor: 'white',
        width: 280,
        borderRadius: 30
    },
    formulario:{
        alignItems: 'center'
    },
    buttonContainer:{
        marginTop: 20,
        alignItems: 'center'
    },
    loginButton: {
        width: 280,
        backgroundColor: '#fd5017',
        padding:10,
        marginBottom: 30,
        borderRadius: 5
    },
    buttonText:{
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    }

})