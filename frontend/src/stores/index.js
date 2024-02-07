import {
  legacy_createStore as createStore,
  applyMiddleware,
} from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
import rootReducer from "./root.reducer";

export default createStore(rootReducer, applyMiddleware(thunk));
