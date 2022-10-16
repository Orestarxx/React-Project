import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../configs/urls";
import {MusicBuild} from "./MusicBuild";

const Music = () => {
    const {genres:musics} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Music))
    },[])
    return (
        <div>
            {musics.results?.map(music =><MusicBuild music={music} key={music.id}/>)}
        </div>
    );
};

export {Music};