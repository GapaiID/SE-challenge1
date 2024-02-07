import axios from "axios";
import { LOADING, TAG, TAGS, TAG_URL } from "./action.type";

export function fetchTagsSuccess(payload) {
  return {
    type: TAGS,
    payload,
  };
}
export function fetchTagByIdSuccess(payload) {
  return {
    type: TAG,
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

      const posts = await axios.get(TAG_URL);

      dispatch(fetchTagsSuccess(posts));
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

      const post = await axios.get(TAG_URL + `/${id}`);

      dispatch(fetchTagByIdSuccess(post));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err.response;
    }
  };
}
