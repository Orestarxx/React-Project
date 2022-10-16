import {combineReducers} from "redux";
import {movieReducer} from "./slices";
import {configureStore} from "@reduxjs/toolkit";
import {genreReducer} from "./slices/genreSlice/genre.slice";

const rootReducer = combineReducers({
    movieReducer,
    genreReducer
});
const setupStore = () => configureStore({
    reducer:rootReducer
});

export {setupStore}