import {
  CURRENT_USER,
  FETCH_USERS,
  USER_LOADING,
  USER_URL,
} from "./action.type";
import axios from "axios";

export const fetchUserSuccess = (payload) => ({
  type: FETCH_USERS,
  payload,
});

export const loading = (payload) => ({
  type: USER_LOADING,
  payload,
});

export const currentUser = (payload) => ({
  type: CURRENT_USER,
  payload,
});

export function getAllUsers() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const users = await axios.get(USER_URL);

      dispatch(fetchUserSuccess(users));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err;
    }
  };
}
