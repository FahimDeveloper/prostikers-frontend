import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";
import { IUser } from "../../../types/user.types";

type IState = {
  user: null | IUser;
  token: null | string;
};

const initialState: IState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      const { user, accessToken } = action.payload;
      state.token = accessToken;
      state.user = user;
    },
    loggedOutUser: (state) => {
      state.user = null;
      state.token = null;
    },
    updateUserInfo: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { loggedInUser, loggedOutUser, updateUserInfo } =
  authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
