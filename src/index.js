import React from "react";
import reactDom from "react-dom";
import "./index.css";
import App from "./app/App";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { createStore } from "./app/store/createStore";
const store = createStore();

reactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
