import { SET_LOADING } from "../types/type";

export const setLoading = (isLoading) => {
  return { type: SET_LOADING, payload: isLoading };
};
