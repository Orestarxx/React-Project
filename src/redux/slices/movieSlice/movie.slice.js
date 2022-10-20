import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../../services/movie.service";

const initialState = {
    movies:[],
    loading:false,
    error:null


};
const getAllMovie = createAsyncThunk(
    'movieSlice/getAll',
    async (page,{rejectWithValue}) =>{
         try {
            const {data} = await movieService.getAll(page)
             console.log(data);
             return data
         }catch (e){
             return rejectWithValue(e.response.data)
         }
    }
);
const searchMovie = createAsyncThunk(
    'movieSlice/searchMovie',
    async (name,{rejectWithValue}) =>{
        try {
            const {data} = await movieService.searchAll(name)
            console.log(data);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);
const getMovieById = createAsyncThunk(
    'movieSlice/getMovieById',
    async (id,{rejectWithValue}) =>{
        try {
            const {data} = await movieService.getMovieById(id)
            console.log(data);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
)
const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAllMovie.fulfilled,(state, action) =>{
                state.movies = action.payload
            })
            .addCase(searchMovie.fulfilled,(state, action) =>{
                state.movies = action.payload
                 //
                 //  action.payload.results.forEach(item =>{
                 // console.log(item);
                 // const {data} = movieService.getMovieById(item.id)
                 //      console.log(data);
                //
                //     state.movies.push( await getMovieById(data.id))
                //
                // })
            })
            .addCase(getMovieById.fulfilled,(state, action) =>{
                state.movies = action.payload
            })
});

const {reducer:movieReducer,actions} = movieSlice;

const movieActions = {
    getAllMovie,
    searchMovie,
     getMovieById
}

export {
    movieReducer,movieActions
}