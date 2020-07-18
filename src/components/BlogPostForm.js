import React, {useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  ImageBackground,
} from "react-native";

export default function BlogPostForm({onSubmit , initialValues}) {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);

  return (
    <>
      <ImageBackground
        source={require("../../assets/img/zen.jpg")}
        style={{
          height: 605,
          overflow: "hidden",
        }}
        imageStyle={{
          resizeMode: "cover",
          top: undefined,
        }}
      >
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.text}>Enter Title:</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(text) => setTitle(text)}
            />
          </View>
          <View style={styles.container}>
            <Text style={styles.text}>Enter Content:</Text>
            <TextInput
              style={styles.input}
              value={content}
              onChangeText={(text) => setContent(text)}
            />
            <Button
              title="Save BlogPost"
              onPress={() => onSubmit(title,content)}
            />
          </View>
        </View>
      </ImageBackground>
    </>
  );
}

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  text: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 20,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -5, height: 5 },
    textShadowRadius: 15,
  },

  input: {
    borderColor: "white",
    borderWidth: 1,
    marginTop: 3,
    height: 30,
    // transform: [{ rotate: '90deg'}]
  },
});
