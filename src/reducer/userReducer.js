import { Tree } from "antd";
import { LOG_OUT, SET_CURRENT_USER, SET_LOADING } from "../types/type";

const initialUser = {
  currentUser: null,
  loading: false,
  authing: false,
};
const userReducer = (state = initialUser, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    case LOG_OUT:
      return { ...state, currentUser: null };
    default:
      return state;
  }
};
export default userReducer;
