import { LOADING, TAG, TAGS } from "./action.type";

const init = {
  tags: [],
  tag: {},
  loading: false,
};

export default function tagReducer(state = init, { type, payload }) {
  switch (type) {
    case TAG:
      return {
        ...state,
        tag: payload,
      };
    case TAGS:
      return {
        ...state,
        tags: payload,
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
