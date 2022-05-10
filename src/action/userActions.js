import { setAuthToken } from "../helper/axiosHeader";
import axiosInstance from "../helper/axiosInstance";
import {
  CLEAR_ERROR,
  LOG_OUT,
  SET_CURRENT_USER,
  SET_ERROR,
  SET_ERROR_REG,
  SET_LOADING,
} from "../types/type";

export const login = (data, navigate) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/login", data);
    dispatch({ type: SET_CURRENT_USER, payload: res.data.user });
    localStorage.setItem("user_token", res.data.token);
    dispatch({ type: CLEAR_ERROR });
    navigate("/");
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({ type: SET_ERROR, payload: error.response.data });
  }
};
export const registerAcc = (data, navigate) => async (dispatch) => {
  try {
    const res = await axiosInstance.post("/auth/register", data);
    dispatch({ type: SET_CURRENT_USER, payload: res.data.user });
    dispatch({ type: CLEAR_ERROR });
    localStorage.setItem("user_token", res.data.token);
    navigate("/");
  } catch (error) {
    console.log(error.response.data.message);
    dispatch({ type: SET_ERROR_REG, payload: error.response.data });
  }
};
const loading = (load) => {
  return { type: SET_LOADING, payload: load };
};

export const getCurrentUser = (token) => async (dispatch) => {
  try {
    setAuthToken(token);
    const res = await axiosInstance.get("/auth/me");
    dispatch({ type: SET_CURRENT_USER, payload: res.data });
  } catch (error) {
    localStorage.removeItem("user_token");
    dispatch({ type: SET_ERROR, payload: error.response.data });
    console.log(error);
  }
};
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOG_OUT,
  });
  localStorage.removeItem("user_token");
  setAuthToken(false);
};
