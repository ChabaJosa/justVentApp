import React, { useState, useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";

export default function EditScreen({ navigation }) {
  const { state } = useContext(Context);
  const blogPost = state.find(
    (blogPost) => blogPost.id === navigation.getParam("id")
  );

  const [title, setTitle] = useState(blogpost.title)
  const [content, setContent] = useState(blogpost.content)
  return (
    <>
      <View>
        <Text>Edit Screen - {navigation.getParam("id")}</Text>
      </View>
    </>
  );
}
