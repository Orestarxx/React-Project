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
    async (movie,{rejectWithValue}) =>{
        try {
            const {data} = await movieService.searchAll(movie)
            console.log(data);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);
// const getMovieById = createAsyncThunk(
//     'movieSlice/getMovieById',
//     async (id,{rejectWithValue}) =>{
//         try {
//             const {data} = await movieService.getMovieById(id)
//             console.log(data);
//             return data
//         }catch (e){
//             return rejectWithValue(e.response.data)
//         }
//     }
// )
const movieSlice = createSlice({
    name:'movieSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAllMovie.fulfilled,(state, action) =>{
                state.movies = action.payload
            })
            // .addCase(searchMovie.fulfilled,(state, action) =>{
            //      action.payload.results.forEach(data =>{
            //     debugger
            //
            //         state.movies.push( await getMovieById(data.id))
            //
            //     })
            // })
});

const {reducer:movieReducer,actions} = movieSlice;

const movieActions = {
    getAllMovie,
    searchMovie,
    // getMovieById
}

export {
    movieReducer,movieActions
}