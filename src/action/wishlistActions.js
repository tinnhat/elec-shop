import { ADD_WISHLIST, REMOVE_WISHLIST } from "../types/type";

export const addToWishlist = (product) => {
  return { type: ADD_WISHLIST, payload: product };
};
export const removeWishlist = (id) => {
  return { type: REMOVE_WISHLIST, payload: id };
};
