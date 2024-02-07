import {
  CURRENT_USER,
  FETCH_USER,
  FETCH_USERS,
  USER_LOADING,
} from "./action.type";

const init = {
  users: [],
  user: {},
  currentUsers: "",
  loading: false,
};

export default function userReducer(state = init, { type, payload }) {
  switch (type) {
    case CURRENT_USER:
      return {
        ...state,
        currentUsers: payload,
      };
    case FETCH_USERS:
      return {
        ...state,
        users: payload,
      };

    case FETCH_USER:
      return {
        ...state,
        user: payload,
      };

    case USER_LOADING:
      return {
        ...state,
        loading: payload,
      };

    default:
      return state;
  }
}
