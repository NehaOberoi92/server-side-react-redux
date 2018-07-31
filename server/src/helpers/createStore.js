import React from "react";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import rootReducers from "../client/reducers";

export default () => {
  const store = createStore(rootReducers, {}, applyMiddleware(thunk));
  return store;
};
