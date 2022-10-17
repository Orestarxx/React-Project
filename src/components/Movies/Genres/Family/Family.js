import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {FamilyBuild} from "./FamilyBuild";
import css from "../genreStyle.module.css";

const Family = () => {
    const {genres:families} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Family))
    },[])
    return (
        <div className={css.holder}>
            {families.results?.map(family =><FamilyBuild family={family} key={family.id}/>)}
        </div>
    );
};

export {Family};