import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appSlice from "./slices/appSlice";
import animeSlice from "./slices/animeSlice";

const rootReducers = combineReducers({
    app: appSlice,
    anime: animeSlice,
});

const reduxStore = configureStore({
    reducer: rootReducers,
})

export default reduxStore;
