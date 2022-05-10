import { ADD_CART, REMOVE_CART, SET_CURRENT_CART } from "../types/type";

const initialValue = {
  cart: JSON.parse(localStorage.getItem("cart")) || [],
};
const cartReducer = (state = initialValue, action) => {
  switch (action.type) {
    case ADD_CART:
      for (let i = 0; i < state.cart.length; i++) {
        if (state.cart[i]._id === action.payload._id) {
          state.cart[i].quantity =
            state.cart[i].quantity + action.payload.quantity;
          localStorage.setItem("cart", JSON.stringify([...state.cart]));
          return { ...state, cart: [...state.cart] };
        }
      }

      localStorage.setItem(
        "cart",
        JSON.stringify([
          ...state.cart,
          { ...action.payload, quantity: action.payload.quantity },
        ])
      );
      return {
        ...state,
        cart: [
          ...state.cart,
          { ...action.payload, quantity: action.payload.quantity },
        ],
      };
    case REMOVE_CART:
      const idx = state.cart.findIndex((val) => val._id === action.payload);
      const newCart = [
        ...state.cart.slice(0, idx),
        ...state.cart.slice(idx + 1),
      ];
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { ...state, cart: newCart };
    default:
      return state;
  }
};
export default cartReducer;
