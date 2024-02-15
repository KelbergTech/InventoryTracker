import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export type InventoryState = {
  name: string;
  amount: number;
};

const initialState: InventoryState = {
  name: "Inventory",
  amount: 0,
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    increment: state => {
      state.amount += 1;
    },
  },
});

export const { increment } = inventorySlice.actions;

export default inventorySlice.reducer;
