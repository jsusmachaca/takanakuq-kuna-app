import { StyleSheet, Text, View } from "react-native";

const Configuration = () => {
    return(
        <View style={style.container}>
            <Text style={style.text}>
                Esta es la configuracion
            </Text>
        </View>
    ) 

}

const style = StyleSheet.create({
    container: {
        backgroundColor: 'black'
    },
    text : {
        color: 'white'
    }
})

export default Configuration;