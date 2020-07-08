import React, { useReducer } from "react";

const BlogContext = React.createContext();

const blogReducer= (state, action) =>{
    switch (action.type) {
        case "add_blogpost":
            return [...state, {title: `Blog Post #${state.length +1}`}];
        default:
            return state;
    }
}
// Not using export default here because
// eventually we will use the BlogContext as the export default
export const BlogProvider = ({ children }) => {
  const [blogPosts, dispatch] = useReducer(blogReducer,[]);

  const addBlogPost = () => {
    //   console.log("Inside addBlogPost")
      dispatch({type: "add_blogpost"})
  }

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
  {
    /* Children is something unrelated to Context, it's a different React feature */
  }
};

export default BlogContext;
