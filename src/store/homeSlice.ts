import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ZellerCustomer } from "../api/client";

export interface ZellerCustomerState {
  users: Array<ZellerCustomer>;
  roleSelected: string | null;
}

const initialState: ZellerCustomerState = {
  users: [],
  roleSelected: null
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateCustomers: (state, action: PayloadAction<Array<ZellerCustomer>>) => {
      state.users = action.payload;
    },
    selectRole: (state, action: PayloadAction<string>) => {
        state.roleSelected = action.payload;
    }
  },
});

export const { updateCustomers, selectRole } = homeSlice.actions;
export default homeSlice.reducer;
