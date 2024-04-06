import React from "react"
import { StyleSheet, View, Text, Image } from "react-native"

import defaultProfile from '../assets/avatars/default.png'
import avocado from '../assets/avatars/avocado.avatar.png'
import bear from '../assets/avatars/bear.avatar.png'
import koala from '../assets/avatars/koala.avatar.png'
import sheep from '../assets/avatars/sheep.avatar.png'
import spider from '../assets/avatars/spider.avatar.png'
import kactus from '../assets/avatars/kactus.avatar.png'


export const PostsItem = (props) => {
  const { data } = props

  const randomAvatars = () => {
    const avatars = [defaultProfile, avocado, bear, koala, sheep, spider, kactus]
    const random = Math.floor(Math.random()  * avatars.length)
    console.log(Math.floor(Math.random() * avatars.length))
    const image = avatars[random]
    return image
  }

  return (
    <View
      key={data.id}
    >
      <View style={styles.date_name}>
        <View style={styles.date_name}>
          <Image style={styles.imageProfile}
            source={
              data.profile_image 
              ?
                {
                  uri: data.profile_image
                }
              :
              randomAvatars()
            }
          />
          <Text style={styles.username}>{data.username}</Text>
        </View>
        <Text style={styles.date}>{data.date_publish.slice(0, 10)}</Text>
      </View>
      {data.post && data.post_image && (
        <View>
          <Text style={styles.postText}>
            {data.post.length <= 100
              ? data.post
              : `${data.post.slice(0, 120)}...`}
            {data.post.length > 120 && (
              <TouchableWithoutFeedback onPress={ () => console.log('Hola mundo') }>
                <Text style={styles.showMore}>Ver más</Text>
              </TouchableWithoutFeedback>
            )}
          </Text>
          <Image
            style={styles.postImage}
            source={{
              uri: data.post_image
            }}
          />
        </View>
      )}
      {data.post && !data.post_image && (
        <View>
          <Text style={styles.postText}>
            {data.post}
          </Text>
        </View>
      )}
      {!data.post && data.post_image && (
        <View>

          <Image
            style={styles.postImage}
            source={{
              uri: data.post_image
            }}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  postText: {
    fontSize: 22.6
  },
  postImage: {
    maxWidth: '100%',
    height: 280
  },
  imageProfile: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginRight: 10
  },
  container: {
    padding: 5,
    paddingBottom: 20,
    borderWidth: 1,
    borderColor: '#000'
  },
  username: {
    fontWeight: "bold",
    fontSize: 18.5
  },
  date: {
    fontSize: 18.5
  },
  showMore: {
    color: '#858585'
  },
  date_name: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})