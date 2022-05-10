import { SET_LOADING } from "../types/type";

const initialValue = {
  isLoading: false,
};
const loadingReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
};
export default loadingReducer;
