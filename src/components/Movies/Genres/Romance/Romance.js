import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {RomanceBuild} from "./RomanceBuild";
import css from "../genreStyle.module.css";

const Romance = () => {
const {genres:romances} = useSelector(state => state.genreReducer)
const dispatch = useDispatch()
useEffect(() =>{
    dispatch(genreActions.getByGenreId(genre.Romance))
},[])
    return (
        <div className={css.holder}>
            {romances.results?.map(romance =><RomanceBuild romance={romance} key={romance.id}/>)}
        </div>
    );
};

export {Romance};