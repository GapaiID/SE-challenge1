import axios from "axios";
import { LOADING, POST, POSTS, POST_URL } from "./action.type";

export function fetchPostsSuccess(payload) {
  return {
    type: POSTS,
    payload,
  };
}
export function fetchPostByIdSuccess(payload) {
  return {
    type: POST,
    payload,
  };
}
export function loading(payload) {
  return {
    type: LOADING,
    payload,
  };
}

export function fetchAllPost() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const posts = await axios.get(POST_URL);

      dispatch(fetchPostsSuccess(posts));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err;
    }
  };
}

export function fetchPostById(id) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const post = await axios.get(POST_URL + `/${id}`);

      dispatch(fetchPostByIdSuccess(post));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err;
    }
  };
}
