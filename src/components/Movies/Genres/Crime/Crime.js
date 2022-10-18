import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";

import {genreActions} from "../../../../redux/slices/genreSlice/genre.slice";
import {CrimeBuild} from "./CrimeBuild";
import css from "../../movieStyle.module.css";

const Crime = () => {
    const {genres: crimes} = useSelector(state => state.genreReducer)
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    useEffect(() => {
        dispatch(genreActions.getByGenreCrimeId({page}))
    }, [page])
    const nextPage = () => setPage(prev => prev + 1)
    const backPage = () => setPage(prev => prev - 1)
    return (
        <div className={css.holder}>
            {crimes.results?.map(crime => <CrimeBuild crime={crime} key={crime.id}/>)}
            <div className={css.buttonHolder}>
                <button className={css.paginationButt} onClick={backPage} disabled={page === 1}>Back</button>
                <button className={css.paginationButt} onClick={nextPage} disabled={!crimes.results?.length}>Next
                </button>
            </div>
        </div>
    );
};

export {Crime};