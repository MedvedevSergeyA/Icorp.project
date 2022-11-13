import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  entities: [],
  totalPrice: 0
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addDevice: (state, action) => {
      state.entities.push(action.payload);
      state.totalPrice = state.entities.reduce((sum, obj) => {
        return obj.price + sum;
      }, 0);
    },
    removeDevice: (state, action) => {
      state.entities = state.entities.filter(
        (obj) => obj.id !== action.payload
      );
    },
    clearDevice: (state, action) => {
      state.entities = [];
      state.totalPrice = 0;
    }
  }
});

const { reducer: basketReducer } = basketSlice;

export const { addDevice, removeDevice, clearDevice } = basketSlice.actions;

export default basketReducer;
