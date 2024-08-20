import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {
  authApiSlice,
  bootcampApiSlice,
  bootcampReservationApiSlice,
  eventApiSlice,
  eventReservationApiSlice,
  trainerApiSlice,
} from "../api/httpsSlice";

const persistConfig = {
  key: "auth",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const rootReducers = combineReducers({
  auth: persistedAuthReducer,
  [authApiSlice.reducerPath]: authApiSlice.reducer,
  [eventApiSlice.reducerPath]: eventApiSlice.reducer,
  [bootcampApiSlice.reducerPath]: bootcampApiSlice.reducer,
  [trainerApiSlice.reducerPath]: trainerApiSlice.reducer,
  [eventReservationApiSlice.reducerPath]: eventReservationApiSlice.reducer,
  [bootcampReservationApiSlice.reducerPath]:
    bootcampReservationApiSlice.reducer,
});

export const rootMiddlewares = [
  authApiSlice.middleware,
  eventApiSlice.middleware,
  bootcampApiSlice.middleware,
  trainerApiSlice.middleware,
  eventReservationApiSlice.middleware,
  bootcampReservationApiSlice.middleware,
];
