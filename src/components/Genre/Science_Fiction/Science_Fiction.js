import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {ScienceFictionBuild} from "./Science_FictionBuild";

const ScienceFiction = () => {
    const {genres:science_fictions} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Science_Fiction))
    },[])
    return (
        <div>
            {science_fictions.results?.map(science =><ScienceFictionBuild science={science} key={science.id}/>)}
        </div>
    );
};

export {ScienceFiction};