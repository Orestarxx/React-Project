import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {MusicBuild} from "./MusicBuild";
import css from "../../movieStyle.module.css";


const Music = () => {
    const {genres: musics} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreMusicId({page}))
    }, [page]);
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {musics.results?.map(music => <MusicBuild music={music} key={music.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!musics.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {Music};