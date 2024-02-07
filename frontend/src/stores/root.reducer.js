import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user/user.reducer";
import postReducer from "./posts/post.reducer";
import tagReducer from "./tags/tag.reducer";

export default combineReducers({
  users: userReducer,
  posts: postReducer,
  tags: tagReducer,
});
