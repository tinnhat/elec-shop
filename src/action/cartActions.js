import { ADD_CART, REMOVE_CART } from "../types/type";

export const addToCart = (product) => {
  return { type: ADD_CART, payload: product };
};
export const removeItem = (id) => {
  return { type: REMOVE_CART, payload: id };
};
