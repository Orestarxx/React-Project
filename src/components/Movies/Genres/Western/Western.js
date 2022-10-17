import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {WesternBuild} from "./WesternBuild";
import css from "../genreStyle.module.css";

const Western = () => {
    const {genres:westerns} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Western))
    },[])
    return (
        <div className={css.holder}>
            {westerns.results?.map(western => <WesternBuild western={western} key={western.id}/>)}
        </div>
    );
};

export {Western};