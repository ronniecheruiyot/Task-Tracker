import { persistReducer, persistStore } from "redux-persist";
import stateReducer from "./reducers/stateSlice"
import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const persistConfig = {
    key: "authentication",
    storage: AsyncStorage,
};

export const store = configureStore({
    reducer: {
      taskState: persistReducer(persistConfig, stateReducer),
    },
  });
  
// export const persister = persistStore(store);