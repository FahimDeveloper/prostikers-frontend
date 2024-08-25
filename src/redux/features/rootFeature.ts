import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {
  appointmentApiSlice,
  authApiSlice,
  bootcampApiSlice,
  eventApiSlice,
  facilityApiSlice,
  facilityReservationCartApiSlice,
  postApiSlice,
  slotBookingApiSlice,
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
  [facilityApiSlice.reducerPath]: facilityApiSlice.reducer,
  [facilityReservationCartApiSlice.reducerPath]:
    facilityReservationCartApiSlice.reducer,
  [appointmentApiSlice.reducerPath]: appointmentApiSlice.reducer,
  [postApiSlice.reducerPath]: postApiSlice.reducer,
  [slotBookingApiSlice.reducerPath]: slotBookingApiSlice.reducer,
});

export const rootMiddlewares = [
  authApiSlice.middleware,
  eventApiSlice.middleware,
  bootcampApiSlice.middleware,
  trainerApiSlice.middleware,
  facilityApiSlice.middleware,
  facilityReservationCartApiSlice.middleware,
  appointmentApiSlice.middleware,
  postApiSlice.middleware,
  slotBookingApiSlice.middleware,
];
