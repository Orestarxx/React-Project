import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {MysteryBuild} from "./MysteryBuild";
import css from "../../movieStyle.module.css";

const Mystery = () => {
    const {genres:mysteries} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Mystery))
    },[])
    return (
        <div className={css.holder}>
            {mysteries.results?.map(mystery =><MysteryBuild mystery={mystery} key={mystery.id}/>)}
        </div>
    );
};

export {Mystery};