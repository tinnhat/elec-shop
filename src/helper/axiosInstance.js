import axios from "axios";
import { setLoading } from "../action/loadingActions";
import store from "../store/store";
import { CLEAR_ERROR } from "../types/type";
const axiosInstance = axios.create({
  baseURL: "https://hidden-fjord-17428.herokuapp.com/api/v1",
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = localStorage.user_token;
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  pending++;
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  store.dispatch(setLoading(true));
  return config;
});
let pending = 0;
let timeoutId = null;

axiosInstance.interceptors.response.use(
  (response) => {
    pending--;
    if (pending === 0) {
      timeoutId = setTimeout(() => {
        store.dispatch(setLoading(false));
      }, 500);
    }
    store.dispatch(setLoading(false));
    return response;
  },
  (error) => {
    pending--;
    if (pending === 0) {
      timeoutId = setTimeout(() => {
        store.dispatch(setLoading(false));
      }, 500);
    }
    //lỗi token thì sẽ không hiển thị
    if (error.response.data.message === "token is invalid") {
      store.dispatch({ type: CLEAR_ERROR });
      return;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
