import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {TvMovieBuild} from "./TV_MovieBuild";
import css from "../genreStyle.module.css";

const TvMovie = () => {
    const {genres:TV_Movies} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.TV_Movie))
    },[])
    return (
        <div className={css.holder}>
            {TV_Movies.results?.map(tv =><TvMovieBuild tv={tv} key={tv.id}/>)}
        </div>
    );
};

export {TvMovie};