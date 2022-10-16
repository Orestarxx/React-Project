import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {DocumentaryBuild} from "./DocumentaryBuild";
import css from "../genreStyle.module.css";

const Documentary = () => {

    const {genres:documentaries} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Documentary))
    },[])
    return (
        <div className={css.holder}>
            {documentaries.results?.map(documentary =><DocumentaryBuild documentary={documentary} key={documentary.id}/>)}
        </div>
    );
};

export {Documentary};