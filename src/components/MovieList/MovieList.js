import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";
import {MovieListBuild} from "./MovieListBuild";

const MovieList = () => {
   const dispatch = useDispatch()
   const {movies} = useSelector(state => state.movieReducer)

    useEffect(() => {
        dispatch(movieActions.getAllMovie())
    },[])
    return (
        <div>
            {movies.results.map(movie =><MovieListBuild key={movie.id} movie={movie}/>)}
        </div>
    );
};

export  {MovieList};