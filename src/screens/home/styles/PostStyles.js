import { StyleSheet } from "react-native"


export const styles = StyleSheet.create({
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