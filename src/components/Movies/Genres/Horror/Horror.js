import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {HorrorBuild} from "./HorrorBuild";
import css from "../../movieStyle.module.css";

const Horror = () => {
    const {genres:horrors} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Horror))
    },[])
    return (
        <div className={css.holder}>
            {horrors.results?.map(horror =><HorrorBuild horror={horror} key={horror.id}/>)}
        </div>
    );
};

export {Horror};