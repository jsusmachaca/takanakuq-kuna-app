import { useState } from "react";
import { Text, Image, View, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { styles } from "../styles/ModalStyles";
import { CommentItem } from "../components/CommentItem";
import { ModalProfileHeader } from "../components/ModalProfileHeader";


export const ModalPost = (props) => {
  const { onShowModal } = props

  return (
    <View
      style={styles.modalBackground}
    >
      <TouchableOpacity onPress={() => onShowModal(false)} style={{ marginBottom: 10 }}>
        <View style={styles.closeModal}>
          <Text>❌</Text>
        </View>
      </TouchableOpacity>

      <View
        style={styles.modalPostBackground}
      >

        <ModalProfileHeader 
          profile_image={props.profile_image} 
          username={props.username} 
          date_publish={props.date_publish} 
        />

        <ScrollView style={styles.scrollView}>
          <View>
            <View
              style={styles.container}
              key={props.id}
            >

              <Text style={styles.posts}>{props.post}</Text>
              {
                props.post_image ?
                  <Image
                    style={styles.postImage}
                    source={{
                      uri: props.post_image
                    }}
                  />
                  : 
                  <></>
              }
            </View>

              <View style={styles.comments}>
                <CommentItem 
                  profile_image={props.profile_image} 
                  username={props.username}
                  content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius? Voluptate, voluptates nobis? Similique id sed consequatur praesentium quo nam dolorem hic optio harum quia dolorum doloremque eaque, earum ipsa!'}
                />
                 <CommentItem 
                  profile_image={props.profile_image} 
                  username={props.username}
                  content={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eius? Voluptate, voluptates nobis? Similique id sed consequatur praesentium quo nam dolorem hic optio harum quia dolorum doloremque eaque, earum ipsa!'}
                />
              </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}