import { ADD_TO_CART } from "../Constant";

export const addToCart = (data) => {
   
  return {
    data: data,
    type: ADD_TO_CART, // Use the imported constant here
  };
};
