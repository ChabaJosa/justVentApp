import React, { useState, useContext } from "react";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

export default function EditScreen({ navigation }) {

  const id = navigation.getParam("id");
  const { state, updatePost } = useContext(Context);
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        console.log(id, title, content);
        updatePost(id, title, content,  () => navigation.pop());
      }}
    />
  );
}
