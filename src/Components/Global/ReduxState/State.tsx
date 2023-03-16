/** @format */

import { IuserData } from "../../interface/UserInterface";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";

const initialState = {
  currentUser: {} as IuserData | null,
};

const ReduxState = createSlice({
  name: "echarging",
  initialState,
  reducers: {
    User: (state, { payload }: PayloadAction<IuserData>) => {
      state.currentUser = payload;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { User, logout } = ReduxState.actions;

export default ReduxState.reducer;
