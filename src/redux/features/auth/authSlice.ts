import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  user: null,
  token: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    loggedOutUser: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { loggedInUser, loggedOutUser } = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state: RootState) => state.auth.user;
export const selectCurrentToken = (state: RootState) => state.auth.token;
