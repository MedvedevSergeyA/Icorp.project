import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../utils/calkTotalPrice";

const initialState = { entities: [], totalPrice: 0 };

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      const findItem = state.entities.find(
        (obj) => obj.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.entities.push({
          ...action.payload,
          count: 1
        });
      }
      state.totalPrice = calcTotalPrice(state.entities);
    },
    minusItem: (state, action) => {
      const findItem = state.entities.find((obj) => obj.id === action.payload);
      if (findItem) {
        findItem.count--;
      }
      state.totalPrice = calcTotalPrice(state.entities);
    },
    removeDevice: (state, action) => {
      state.entities = state.entities.filter(
        (obj) => obj.id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.entities);
    },
    clearDevice: (state, action) => {
      state.entities = [];
      state.totalPrice = 0;
    }
  }
});

const { reducer: basketReducer } = basketSlice;

export const { addDevice, removeDevice, clearDevice, minusItem } =
  basketSlice.actions;

export default basketReducer;
