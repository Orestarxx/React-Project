import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {DramaBuild} from "./DramaBuild";
import css from "../genreStyle.module.css";

const Drama = () => {
    const {genres:dramas} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Drama))
    },[])
    return (
        <div className={css.holder}>
            {dramas.results?.map(drama =><DramaBuild drama={drama} key={drama.id}/>)}
        </div>
    );
};

export {Drama};