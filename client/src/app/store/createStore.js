import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import deviceReducer from "./deviceSlice";
import sideBarReducer from "./sideBar";
import basketReducer from "./basketSlice";
import usersReducer from "./userSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  device: deviceReducer,
  sidebar: sideBarReducer,
  basket: basketReducer,
  user: usersReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
