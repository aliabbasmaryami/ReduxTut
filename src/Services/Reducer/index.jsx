// import { combineReducers } from "redux";
// import cartItem from "./reducer"
// combineReducers({
//     cartItem
// })

import { combineReducers } from "redux";
import cartItem from "./reducer"; // Import the reducer

const rootReducer = combineReducers({
  cartItem, // Combine reducers into a root reducer
});

export default rootReducer; // Export the root reducer

