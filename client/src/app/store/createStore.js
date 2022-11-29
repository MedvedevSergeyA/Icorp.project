import { combineReducers, configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import deviceReducer from "./deviceSlice";
import sideBarReducer from "./sideBar";
import basketReducer from "./basketSlice";

const rootReducer = combineReducers({
  modal: modalReducer,
  device: deviceReducer,
  sidebar: sideBarReducer,
  basket: basketReducer
});

export function createStore() {
  return configureStore({
    reducer: rootReducer
  });
}
