import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {TvMovieBuild} from "./TV_MovieBuild";
import css from "../../movieStyle.module.css";


const TvMovie = () => {
    const {genres: TV_Movies} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreTVMovieId({page}))
    }, [page]);
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {TV_Movies.results?.map(tv => <TvMovieBuild tv={tv} key={tv.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!TV_Movies.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {TvMovie};