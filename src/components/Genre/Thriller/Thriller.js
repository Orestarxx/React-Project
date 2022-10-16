import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {ThrillerBuild} from "./ThrillerBuild";

const Thriller = () => {
    const {genres:thrillers} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Thriller))
    },[])
    return (
        <div>
            {thrillers.results?.map(thriller => <ThrillerBuild thriller={thriller} key={thriller.id}/>)}
        </div>
    );
};

export {Thriller};