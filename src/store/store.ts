import { configureStore } from "@reduxjs/toolkit";

import inventoryReducer from "./reducers/inventoriesReducer";

export const store = configureStore({
  reducer: {
    inventories: inventoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
