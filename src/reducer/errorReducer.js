import { CLEAR_ERROR, SET_ERROR, SET_ERROR_REG } from "../types/type";

const initialValue = {
  error: "",
  errorRegister: "",
};
const errorReducer = (state = initialValue, action) => {
  switch (action.type) {
    case SET_ERROR:
      return { ...state, error: action.payload.message };
    case SET_ERROR_REG:
      return { ...state, errorRegister: action.payload.message };
    case CLEAR_ERROR:
      return { ...state, errorRegister: "", error: "" };
    default:
      return state;
  }
};
export default errorReducer;
