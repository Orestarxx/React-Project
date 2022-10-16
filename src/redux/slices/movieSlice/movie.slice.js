import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import {movieService} from "../../../services/movie.service";

const initialState = {
    movies:[],
    currentMovie: null,
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
});

const {reducer:movieReducer,actions} = movieSlice;

const movieActions = {
    getAllMovie
}

export {
    movieReducer,movieActions
}