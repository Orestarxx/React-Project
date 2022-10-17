import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {ComedyBuild} from "./ComedyBuild";
import css from "../genreStyle.module.css";

const Comedy = () => {
    const {genres:comedies} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Comedy))
    },[])
    return (
        <div className={css.holder}>
            {comedies.results?.map(comedy =><ComedyBuild comedy={comedy} key={comedy.id}/>)}
        </div>
    );
};

export {Comedy};