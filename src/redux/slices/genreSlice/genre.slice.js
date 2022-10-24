import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {movieService} from "../../../services/movie.service";
import {genre} from "../../../configs/urls";


const initialState = {
    genres: []


};
const getByGenreActionId = createAsyncThunk(
    'genreSlice/ getByGenreActionId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Action, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreAdventureId = createAsyncThunk(
    'genreSlice/ getByGenreAdventureId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Adventure, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreAnimationId = createAsyncThunk(
    'genreSlice/ getByGenreAnimationId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Animation, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);

const getByGenreComedyId = createAsyncThunk(
    'genreSlice/ getByGenreComedyId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Comedy, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreCrimeId = createAsyncThunk(
    'genreSlice/ getByGenreCrimeId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Crime, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreDocumentaryId = createAsyncThunk(
    'genreSlice/ getByGenreDocumentaryId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Documentary, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreDramaId = createAsyncThunk(
    'genreSlice/ getByGenreDramaId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Drama, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreFamilyId = createAsyncThunk(
    'genreSlice/ getByGenreFamilyId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Family, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreFantasyId = createAsyncThunk(
    'genreSlice/ getByGenreFantasyId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Fantasy, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreHistoryId = createAsyncThunk(
    'genreSlice/ getByGenreHistoryId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.History, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreHorrorId = createAsyncThunk(
    'genreSlice/ getByGenreHorrorId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Horror, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreMusicId = createAsyncThunk(
    'genreSlice/ getByGenreMusicId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Music, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreMysteryId = createAsyncThunk(
    'genreSlice/ getByGenreMysteryId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Mystery, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreRomanceId = createAsyncThunk(
    'genreSlice/ getByGenreRomanceId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Romance, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreScienceFictionId = createAsyncThunk(
    'genreSlice/ getByGenreScienceFictionId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Science_Fiction, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreThrillerId = createAsyncThunk(
    'genreSlice/ getByGenreThrillerId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Thriller, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreTVMovieId = createAsyncThunk(
    'genreSlice/ getByGenreTVMovieId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.TV_Movie, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreWarId = createAsyncThunk(
    'genreSlice/ getByGenreWarId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.War, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);
const getByGenreWesternId = createAsyncThunk(
    'genreSlice/ getByGenreWesternId',
    async ({id, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getByGenreId(genre.Western, page)
            // console.log(data);
            return data
        } catch (e) {
            return rejectWithValue(e.response.data)
        }
    }
);


const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getByGenreActionId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreAdventureId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreAnimationId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreComedyId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreCrimeId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreDocumentaryId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreDramaId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreFamilyId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreFantasyId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreHistoryId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreHorrorId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreMusicId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreMysteryId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreRomanceId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreScienceFictionId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreThrillerId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreTVMovieId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreWarId.fulfilled, (state, action) => {
                state.genres = action.payload
            })
            .addCase(getByGenreWesternId.fulfilled, (state, action) => {
                state.genres = action.payload
            })


});
const {reducer: genreReducer, actions} = genreSlice;

const genreActions = {
    getByGenreActionId,
    getByGenreAdventureId,
    getByGenreAnimationId,
    getByGenreComedyId,
    getByGenreCrimeId,
    getByGenreDocumentaryId,
    getByGenreDramaId,
    getByGenreFamilyId,
    getByGenreFantasyId,
    getByGenreHistoryId,
    getByGenreHorrorId,
    getByGenreMusicId,
    getByGenreMysteryId,
    getByGenreRomanceId,
    getByGenreScienceFictionId,
    getByGenreThrillerId,
    getByGenreTVMovieId,
    getByGenreWarId,
    getByGenreWesternId

}
export {
    genreReducer, genreActions
}