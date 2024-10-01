import {configureStore} from "@reduxjs/toolkit";
import MoviesReducer from "./movies/movieSlice";

export const store = configureStore({
    reducer : {
        movies : MoviesReducer,
    },
});