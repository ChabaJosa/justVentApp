import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
} from "react-native";
import Context from "../context/BlogContext";

const CreateScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
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
            onChangeText={(text) => seContent(text)}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

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

export default CreateScreen;
