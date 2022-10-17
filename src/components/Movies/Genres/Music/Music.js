import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {genre} from "../../../../configs/urls";
import {MusicBuild} from "./MusicBuild";
import css from "../genreStyle.module.css";

const Music = () => {
    const {genres:musics} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    useEffect(() =>{
        dispatch(genreActions.getByGenreId(genre.Music))
    },[])
    return (
        <div className={css.holder}>
            {musics.results?.map(music =><MusicBuild music={music} key={music.id}/>)}
        </div>
    );
};

export {Music};