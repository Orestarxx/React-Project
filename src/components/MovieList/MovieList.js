import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices";
import {MovieListBuild} from "./MovieListBuild";
import css from './movieStyle.module.css'




const MovieList = () => {
    const {movies} = useSelector(state => state.movieReducer)
    const dispatch = useDispatch()
      const [page,setPage] = useState(1)

    useEffect(() => {
        dispatch(movieActions.getAllMovie(page))

    }, [page]);
    const nextPage = () =>setPage(prev =>prev +1)
    const backPage = () =>setPage(prev =>prev -1)

    return (
        <div className={css.holder}>
            {movies.results?.map(movie => <MovieListBuild key={movie.id} movie={movie}/>)}
            <div className={css.buttonHolder}>
                <button onClick={backPage} disabled={page === 1}>Back</button>
                <button onClick={nextPage} disabled={!movies.results?.length}>Next</button>

            </div>
        </div>
    );
};

export {MovieList};