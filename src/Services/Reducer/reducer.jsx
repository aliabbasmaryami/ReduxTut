import { ADD_TO_CART } from "../Constant";
const initialState = {
  cartData: [],
};
export default function cardItem(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log("this is reducer data", action);

      return {
        ...state,
        cartData: action.data,
      };
      break;
    default:
      return state;
  }
}
