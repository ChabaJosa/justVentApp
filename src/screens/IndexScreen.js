import React, { useContext, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";
import AwesomeButton from "react-native-really-awesome-button";

const IndexScreen = ({ navigation }) => {
  const { state, deletePost, getBlogPosts } = useContext(Context);

  useEffect(() => {
    // First time you go to index
    getBlogPosts();
    // Every time you return to index 
    navigation.addListener('didFocus', () => {
      getBlogPosts();
    })

    // Removes listener to prevent memory leak
    return () => {
      listener.remove()
    }
  }, []);

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          source={require("../../assets/img/back1.png")}
          style={{
            height: 605,
            overflow: "hidden",
            opacity: 0.7,
            backgroundColor: "grey",
          }}
          imageStyle={{
            resizeMode: "cover",
            top: undefined,
          }}
        >
          {/* <AwesomeButton> */}
          {/* <Image
              source="require('send-icon.png')" */}
          {/* // source={require("../../assets/img/back1.png")} */}
          {/* /> */}
          {/* <Text>Add Post</Text> */}
          {/* </AwesomeButton> */}
          <FlatList
            data={state}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() => navigation.navigate("Show", { id: item.id })}
                >
                  <View style={styles.row}>
                    <Text style={styles.text}>
                      {item.title} - {item.id}
                    </Text>
                    <TouchableOpacity onPress={() => deletePost(item.id)}>
                      <Feather
                        name="trash-2"
                        color="black"
                        style={styles.icon}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </ImageBackground>
      </View>
    </>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather name="plus-circle" size={30} style={{ marginRight: 5 }} />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    // flex: -1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'grey',
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    margin: 1,
    borderColor: "white",
  },
  icon: {
    fontSize: 24,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginHorizontal: 10,
  },
  text: {
    fontFamily: "AvenirNext-Regular",
    fontSize: 20,
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginHorizontal: 10,
  },
});

export default IndexScreen;
