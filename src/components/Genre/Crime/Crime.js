import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {CrimeBuild} from "./CrimeBuild";

const Crime = () => {
    const {genres:crimes} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Crime))
    },[])
    return (
        <div>
            {crimes.results?.map(crime =><CrimeBuild crime={crime} key={crime.id}/>)}
        </div>
    );
};

export {Crime};