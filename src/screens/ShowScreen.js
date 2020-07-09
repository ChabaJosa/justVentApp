import React, { useContext } from "react";
import { Context } from "../context/BlogContext"

import {
  View,
  StyleSheet,
  Text
} from "react-native";

const ShowScreen = ({ navigation }) => {

    const {state} = useContext(Context);
    console.log(navigation.getParam('id'))
    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id') )

    return (
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({});
  
export default ShowScreen;