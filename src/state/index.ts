import { combineReducers } from "redux";
import { createStore } from "redux";

import { reducer as loading } from "./loading";

const reducers = combineReducers({
  loading,
});

export const getStore = () => createStore(reducers);
