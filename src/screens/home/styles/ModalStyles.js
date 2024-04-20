import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
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
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(70,70,70,0.9)"
  },
  closeModal: {
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",

  },
  modalPostBackground: {
    backgroundColor: "white",
    width: "95%",
    height: "80%",
    borderRadius: 20
  }
})