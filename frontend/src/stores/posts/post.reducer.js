import { LOADING, POST, POSTS } from "./action.type";

const init = {
  posts: [],
  post: {},
  loading: false,
};

export default function postReducer(state = init, { type, payload }) {
  switch (type) {
    case POSTS:
      return {
        ...state,
        posts: payload,
      };
    case POST:
      return {
        ...state,
        post: payload,
      };
    case LOADING:
      return {
        ...state,
        loading: payload,
      };
    default:
      return state;
  }
}
