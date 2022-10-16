import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices";
import {MovieListBuild} from "./MovieListBuild";
import css from './movieStyle.module.css'

const MovieList = () => {
   const {movies} = useSelector(state => state.movieReducer)
    console.log(movies);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(movieActions.getAllMovie())
    },[])
    return (
        <div className={css.holder}>
            {movies.results?.map(movie =><MovieListBuild key={movie.id} movie={movie}/>)}
        </div>
    );
};

export  {MovieList};