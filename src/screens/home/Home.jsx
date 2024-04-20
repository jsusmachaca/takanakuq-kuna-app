import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React from "react";
import { Posts } from './components/Posts';


export const Home = () => {
  return (
    <>
      <StatusBar />
      <View>
        <Posts />
      </View>
    </>
  )
}