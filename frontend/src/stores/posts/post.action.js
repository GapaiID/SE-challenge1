import axios from "axios";
import { LOADING, POST, POSTS, POST_URL } from "./action.type";
import getToken from "../../utils/getToken";
import { TOKEN } from "../../utils/constants";

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

      const token = getToken(TOKEN);

      console.log(token);

      let { data: posts } = await axios.get(POST_URL, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!posts.length) throw new Error("Failed to fetch posts");

      dispatch(fetchPostsSuccess(posts));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err.response;
    }
  };
}

export function fetchPostById(id) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const token = getToken(TOKEN);

      let { data: post } = await axios.get(POST_URL + `/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(fetchPostByIdSuccess(post));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err.response;
    }
  };
}
