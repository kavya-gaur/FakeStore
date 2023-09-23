import { createStore } from "redux";
import root_reducer from "./reducers/index";

export const store = createStore(
  root_reducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
