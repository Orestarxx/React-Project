import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {AnimationBuild} from "./AnimationBuild";

const Animation = () => {
   const {genres:animations} = useSelector(state => state.genreReducer)
   const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Animation))
    },[])
    return (
        <div>
            {animations.results?.map(animation =><AnimationBuild animation={animation} key={animation.id}/>)}
        </div>
    );
};

export {Animation};