import { View, Keyboard, Animated, ScrollView } from 'react-native'
import { useEffect, useState, useRef } from 'react'
import { FormRegister } from './components/FormRegister'
import { styles } from './styles/styles'

import logo_1 from './assets/avatars/logo.1.jpg'
import logo_2 from './assets/avatars/logo.2.jpg'

const logos = [logo_1, logo_2]

export const Register = () => {
  const [image, setImage] = useState(logos[0])
  const [isKeyboardVisible, setKeyboardVisible] = useState(false)
  const fadeAnim = useRef(new Animated.Value(1)).current

  useEffect(() => {
    let index = 0
    const intervalId = setInterval(() => {
      if (!isKeyboardVisible) {
        index = (index + 1) % logos.length
        setImage(logos[index])
        fadeOutAndChangeImage(index)
      }
    }, 10000)

    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true)
    })

    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false)
      setImage(logos[index])
    })

    return () => {
      clearInterval(intervalId)
      keyboardDidShowListener.remove()
      keyboardDidHideListener.remove()
    }
  }, [isKeyboardVisible])

  const fadeOutAndChangeImage = (index) => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start(() => {
      setImage(index)
      fadeInImage()
    })
  }

  const fadeInImage = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start()
  }

  return( 
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={[styles.logoContainerRegister, { marginBottom: isKeyboardVisible ? 55 : 0 }]}>
          {!isKeyboardVisible && (
            <Animated.Image source={logos[image]} style={[styles.logoRegister, { opacity: fadeAnim }]} />
          )}
        </View>
        <FormRegister />
      </ScrollView>
  )
}

