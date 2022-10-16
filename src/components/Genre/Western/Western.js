import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";

const Western = () => {
    const {} = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Western))
    },[])
    return (
        <div>

        </div>
    );
};

export {Western};