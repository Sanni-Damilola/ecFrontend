/** @format */

import { IuserData } from "../../interface/UserInterface";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { Idevice } from "../../interface/DeviceInterface";

const initialState = {
  currentUser: {} as IuserData | null,
  device: {} as Idevice | null,
};

const ReduxState = createSlice({
  name: "echarging",
  initialState,
  reducers: {
    User: (state, { payload }: PayloadAction<IuserData>) => {
      state.currentUser = payload;
    },
    deviceData: (state, { payload }: PayloadAction<Idevice>) => {
      state.device = payload;
    },

    logout: (state) => {
      state.currentUser = null;
    },
  },
});

export const { User, logout, deviceData } = ReduxState.actions;

export default ReduxState.reducer;
