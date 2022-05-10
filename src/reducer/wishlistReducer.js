import { ADD_WISHLIST, REMOVE_WISHLIST } from "../types/type";

const initialValue = {
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
};
const wishlishReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_WISHLIST:
      for (let i = 0; i < state.wishlist.length; i++) {
        if (state.wishlist[i]._id === action.payload._id) {
          state.wishlist[i].quantity++;
          localStorage.setItem("wishlist", JSON.stringify([...state.wishlist]));
          return { ...state, wishlist: [...state.wishlist] };
        }
      }

      localStorage.setItem(
        "wishlist",
        JSON.stringify([...state.wishlist, { ...action.payload, quantity: 1 }])
      );
      return {
        ...state,
        wishlist: [...state.wishlist, { ...action.payload, quantity: 1 }],
      };
    case REMOVE_WISHLIST:
      const idx = state.wishlist.findIndex((val) => val._id === action.payload);
      const newCart = [
        ...state.wishlist.slice(0, idx),
        ...state.wishlist.slice(idx + 1),
      ];
      localStorage.setItem("wishlist", JSON.stringify(newCart));
      return { ...state, wishlist: newCart };
    default:
      return state;
  }
};
export default wishlishReducer;
