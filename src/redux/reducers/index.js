import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";

const root_reducer = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
});
export default root_reducer;
