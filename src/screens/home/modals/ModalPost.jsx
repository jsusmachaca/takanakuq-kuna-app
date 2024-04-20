import { useState } from "react";
import { Text, Image, View, TouchableOpacity, ScrollView, Pressable } from "react-native";
import { styles } from "../styles/ModalStyles";

export const ModalPost = (props) => {
  const { onShowModal } = props

  return (
    <View
      style={styles.modalBackground}
    >
      <TouchableOpacity onPress={() => onShowModal(false)} style={{marginBottom: 10}}>
        <View style={styles.closeModal}>
          <Text>❌</Text>          
        </View>
      </TouchableOpacity>

      <View
        style={styles.modalPostBackground}
      >
        <ScrollView>
          <View >
            <View
              style={styles.container}
              key={props.id}
            >
              <Text>{props.username}</Text>
              <Text style={styles.posts}>{props.post}</Text>
              {
                props.post_image ?
                  <Image
                    style={styles.postImage}
                    source={{
                      uri: props.post_image
                    }}
                  />
                  : <></>
              }
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}