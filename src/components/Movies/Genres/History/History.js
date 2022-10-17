import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {HistoryBuild} from "./HistoryBuild";
import css from "../../movieStyle.module.css";

const History = () => {
    const {genres:histories} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.History))
    },[])
    return (
        <div className={css.holder}>
            {histories.results?.map(history =><HistoryBuild history={history} key={history.id}/>)}
        </div>
    );
};

export {History};