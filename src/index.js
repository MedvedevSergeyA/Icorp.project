import React from "react";
import reactDom from "react-dom";
import "./index.css";
import App from "./app/App";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Provider } from "react-redux";
import { createStore } from "./app/store/createStore";
import { ThemeProvider } from "./app/context/ThemeContext/themeContext";
import BackGround from "./app/components/common/Backgound/backGround";
import Toggle from "./app/components/common/Toggle/toggle";
const store = createStore();

reactDom.render(
  <Provider store={store}>
    <ThemeProvider>
      <BackGround>
        <div className="right-14 absolute md:right-[50%] top-0 mr-4 mt-4 md:mr-6 md:mt-4">
          <Toggle />
        </div>
        <App />
      </BackGround>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
