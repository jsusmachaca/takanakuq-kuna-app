import React, { useState } from "react"
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback, Modal } from "react-native"
import { ModalPost } from '../modals/ModalPost.jsx';
import { styles } from "../style/HomeStyles.js";

import defaultProfile from '../assets/avatars/default.png'
import avocado from '../assets/avatars/avocado.avatar.png'
import bear from '../assets/avatars/bear.avatar.png'
import koala from '../assets/avatars/koala.avatar.png'
import sheep from '../assets/avatars/sheep.avatar.png'
import spider from '../assets/avatars/spider.avatar.png'
import kactus from '../assets/avatars/kactus.avatar.png'


export const PostsItem = (props) => {
  const { data } = props

  const [ showModal, setVisible ] = useState(false)

  const randomAvatars = () => {
    const avatars = [defaultProfile, avocado, bear, koala, sheep, spider, kactus]
    const random = Math.floor(Math.random()  * avatars.length)
    const image = avatars[random]
    return image
  }

  return (
    <>
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
              <TouchableWithoutFeedback onPress={ () => setVisible(true) }>
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

      <Modal visible={showModal} transparent={true} animationType="slide" >
        <ModalPost post={data.post} post_image={data.post_image} onShowModal={setVisible} />
      </Modal>
    </>
  )
}