import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {WarBuild} from "./WarBuild";
import css from "../genreStyle.module.css";

const War = () => {
    const {genres:wars} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.War))
    },[])
    return (
        <div className={css.holder}>
            {wars.results?.map(war => <WarBuild war={war} key={war.id}/>)}
        </div>
    );
};

export {War};