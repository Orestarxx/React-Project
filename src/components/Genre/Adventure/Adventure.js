import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions, genreReducer} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {AdventureBuild} from "./AdvantureBuild";
import css from "../genreStyle.module.css";

const Adventure = () => {
    const {genres:adventures} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Adventure))
    },[])
    return (
        <div className={css.holder}>
            {adventures.results?.map(adventure => <AdventureBuild key={adventure.id} adventure={adventure}/>)}
        </div>
    );
};

export {Adventure};