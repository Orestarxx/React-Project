import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {ComedyBuild} from "./ComedyBuild";
import css from "../../movieStyle.module.css";


const Comedy = () => {
    const {genres: comedies} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreComedyId({page}))
    }, [page]);
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {comedies.results?.map(comedy => <ComedyBuild comedy={comedy} key={comedy.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!comedies.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {Comedy};