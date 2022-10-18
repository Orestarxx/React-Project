import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {movieService} from "../../../services/movie.service";
import {genre} from "../../../configs/urls";


const initialState = {
    genres:[],
    loading:false,
    error:null

};
const getByGenreId = createAsyncThunk(
    'genreSlice/ getByGenreId',
    async ({id,page},{rejectWithValue}) =>{
        try{
           const {data} = await movieService.getByGenreId(genre.Action,page)
            // console.log(data);
            return data
        }catch (e){
            return rejectWithValue(e.response.data)
        }
    }
);


const genreSlice = createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getByGenreId.fulfilled,(state, action) =>{
                state.genres = action.payload
            })

});
const {reducer:genreReducer,actions} = genreSlice;

const genreActions = {
getByGenreId

}
export {
    genreReducer,genreActions
}