import createDataContext from "./createDataContext";
import jsonServer from "../api/jsonServer"

const blogReducer = (state, action) => {
  switch (action.type) {
    case "get_blogposts":
      return action.payload;

    case "add_blogpost":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case "delete_blogpost":
      return state.filter((blogPost) => blogPost.id !== action.payload);
    case "edit_blogpost":
      return state.map((blogPost) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    default:
      return state;
  }
};

const getBlogPosts = dispatch => {
  return async () => {
    try {

      const response = await jsonServer.get("/blogposts")
      dispatch({type: "get_blogposts", payload: response.data})
    } 
    catch (err) {
        console.log("Error here----------------------------------------------------",err)
    }
    // response.data === [{}, {}, {}]

  }
}

const addBlogPost = (dispatch) => {
  return (title, content, callback) => {
    dispatch({
      type: "add_blogpost",
      payload: { title: title, content: content },
    });
    if (callback) {
      callback();
    }
  };
};

const deletePost = (dispatch) => {
  return (id) => {
    dispatch({ type: "delete_blogpost", payload: id });
  };
};

const updatePost = (dispatch) => {
  return (id, title, content, callback) => {
    dispatch({ type: "edit_blogpost", payload: { id, title, content } });
    if (callback) {
      callback();
    }
  };
};

export const { Context, Provider } = createDataContext(
  blogReducer,
  { addBlogPost, deletePost, updatePost, getBlogPosts },
  []
  // [{ title: "Pablito", content: "Clavo un clavito", id: 1 }]
);
