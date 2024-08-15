import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import { authApiSlice } from "../api/httpsSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducers = combineReducers({
  auth: persistedAuthReducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
});

export const rootMiddlewares = [authApiSlice.middleware];
