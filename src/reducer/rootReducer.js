import { combineReducers } from "redux";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import loadingReducer from "./loadingReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  userReducer,
  errorReducer,
  loadingReducer,
  cartReducer,
  wishlistReducer,
});

export default rootReducer;
