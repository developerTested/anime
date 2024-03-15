import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animeList: [],
    page: 0,
    total: 0
}

const animeSlice = createSlice({
   name: 'anime',
   initialState,
   reducers: {}
});


export default animeSlice.reducer