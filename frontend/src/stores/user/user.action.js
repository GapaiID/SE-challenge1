import { TOKEN } from "../../utils/constants";
import setToken from "../../utils/setToken";
import {
  AUTH_URL,
  CURRENT_USER,
  FETCH_USER,
  FETCH_USERS,
  USER_LOADING,
  USER_URL,
} from "./action.type";
import axios from "axios";

export const fetchUsersSuccess = (payload) => ({
  type: FETCH_USERS,
  payload,
});

export const fetchOneUserSuccess = (payload) => ({
  type: FETCH_USER,
  payload,
});

export const loading = (payload) => ({
  type: USER_LOADING,
  payload,
});

export const setUser = (payload) => ({
  type: CURRENT_USER,
  payload,
});

export function fetchAllUsers() {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const { data: users } = await axios.get(USER_URL);

      dispatch(fetchUsersSuccess(users));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err.response;
    }
  };
}

export function fetchUserById(userId) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const { data: user } = await axios.get(USER_URL + `/${userId}`);

      dispatch(fetchOneUserSuccess(user));
      dispatch(loading(false));
    } catch (err) {
      dispatch(loading(false));
      throw err.response;
    }
  };
}

export function login(loginForm) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const { data } = await axios.post(AUTH_URL + `/login`, loginForm);

      if (!data || !data.token) {
        throw new Error("Failed to login");
      }

      const { token, name } = data;

      setToken({ name: TOKEN, token });

      dispatch(setUser(name));
      dispatch(loading(false));

      return name;
    } catch (err) {
      dispatch(loading(false));
      throw err.response;
    }
  };
}

export function register(registerPayload) {
  return async (dispatch) => {
    try {
      dispatch(loading(true));

      const { data } = await axios.post(
        AUTH_URL + "/register",
        registerPayload
      );

      if (!data || !data.token) {
        throw new Error("Failed to login");
      }

      const { token, name } = data;
      setToken({ name: TOKEN, token });

      dispatch(setUser(name));
      dispatch(loading(false));

      return name;
    } catch (err) {
      dispatch(loading(false));
      throw err.response;
    }
  };
}
