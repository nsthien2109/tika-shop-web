import { configureStore, combineReducers } from "@reduxjs/toolkit";
import uiSlice from "../slice/uiSlice";
import authSlice from "../slice/authSlice";
import userSlice from "../slice/userSlice";
import categorySlice from "../slice/categorySlice";
import bannerSlice from "../slice/bannerSlice";
import storeSlice from "../slice/storeSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  ui: uiSlice.reducer,
  auth: authSlice.reducer,
  users: userSlice.reducer,
  categories: categorySlice.reducer,
  banners: bannerSlice.reducer,
  stores: storeSlice.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
