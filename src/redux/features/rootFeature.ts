import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/authSlice";
import { combineReducers } from "@reduxjs/toolkit";
import {
  addonApislice,
  appointmentApiSlice,
  authApiSlice,
  bootcampApiSlice,
  cancellationApiSlice,
  classApiSlice,
  clientApiSlice,
  eventApiSlice,
  facilityApiSlice,
  facilityReservationCartApiSlice,
  paymentApiSlice,
  postApiSlice,
  purchasedBundlePackageApiSlice,
  slotBookingApiSlice,
  productApiSlice,
  trainerApiSlice,
  userApiSlice,
  voucherApiSlice,
  categoryApiSlice,
  orderApiSlice,
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
  [paymentApiSlice.reducerPath]: paymentApiSlice.reducer,
  [classApiSlice.reducerPath]: classApiSlice.reducer,
  [clientApiSlice.reducerPath]: clientApiSlice.reducer,
  [voucherApiSlice.reducerPath]: voucherApiSlice.reducer,
  [userApiSlice.reducerPath]: userApiSlice.reducer,
  [addonApislice.reducerPath]: addonApislice.reducer,
  [cancellationApiSlice.reducerPath]: cancellationApiSlice.reducer,
  [purchasedBundlePackageApiSlice.reducerPath]:
    purchasedBundlePackageApiSlice.reducer,
  [productApiSlice.reducerPath]: productApiSlice.reducer,
  [categoryApiSlice.reducerPath]: categoryApiSlice.reducer,
  [orderApiSlice.reducerPath]: orderApiSlice.reducer,
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
  paymentApiSlice.middleware,
  classApiSlice.middleware,
  clientApiSlice.middleware,
  voucherApiSlice.middleware,
  userApiSlice.middleware,
  addonApislice.middleware,
  cancellationApiSlice.middleware,
  purchasedBundlePackageApiSlice.middleware,
  productApiSlice.middleware,
  categoryApiSlice.middleware,
  orderApiSlice.middleware,
];
