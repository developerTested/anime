import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: true,
}

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setDarkMode: (state, action) => {
            state.darkMode = action.payload;
        }
    }
});

export const { setDarkMode } = appSlice.actions

export default appSlice.reducer