import React, { useContext } from "react";
import { View, StyleSheet, Text, FlatList, Button } from "react-native";
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <>
      <View>
        <Text>Index Screen</Text>
        <Button title="Add Post" onPress={() => addBlogPost()} />
        <FlatList
          data={data}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => {
            return <Text>{item.title}</Text>;
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
