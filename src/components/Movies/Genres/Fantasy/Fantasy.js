import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {FantasyBuild} from "./FantasyBuild";
import css from "../../movieStyle.module.css";

const Fantasy = () => {
    const {genres:fantasies} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Fantasy))
    },[])
    return (
        <div className={css.holder}>
            {fantasies.results?.map(fantasy =><FantasyBuild fantasy={fantasy} key={fantasy.id}/>)}
        </div>
    );
};

export {Fantasy};