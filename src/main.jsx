// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css";

// import createStore from "redux";
// import { Provider } from "react-redux";
// import rootReducer from "./Services/Reducer/index.jsx";
// const store = createStore(rootReducer);
// console.log("this is store", store);

// createRoot(document.getElementById("root")).render(
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createStore } from "redux"; // Fixed import
import { Provider } from "react-redux";
import rootReducer from "./Services/Reducer/index.jsx";

const store = createStore(rootReducer); // Creating Redux store
console.log("this is store", store);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
