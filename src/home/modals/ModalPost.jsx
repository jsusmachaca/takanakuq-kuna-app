import { useState } from "react";
import { StyleSheet, Text, Image, View, TouchableOpacity, ScrollView, Pressable } from "react-native";


export const ModalPost = (props) => {
  const { onShowModal } = props

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.9)"
      }}
    >
      <TouchableOpacity onPress={() => onShowModal(false)} style={{marginBottom: 10}}>
        <View style={{
          width: "90%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",

        }}>
          <Text>❌</Text>          
        </View>
      </TouchableOpacity>

      <View
        style={{
          backgroundColor: "white",
          width: "95%",
          height: "80%",
          borderRadius: 20
        }}
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


const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 20,
  },
  posts: {
    fontSize: 22.6
  },
  postImage: {
    maxWidth: '100%',
    height: 280
  },
})